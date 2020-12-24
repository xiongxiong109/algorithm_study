# 基于SMTP的邮件传输功能
from smtplib import SMTP
from email.header import Header
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


# 发送邮件功能
def send_email():
    sender = 'bearcambridge@qq.com'
    receivers = ['444122662@qq.com']

    message = MIMEText('用Python发送邮件的示例代码.', 'plain', 'utf-8')
    message['From'] = Header('jqxiong', 'utf-8')
    message['To'] = Header('xiongxiong109', 'utf-8')

    message['Subject'] = Header('示例代码实验邮件', 'utf-8')
    smtper = SMTP('smtp.qq.com')

    # SMTP发送邮件，如果使用QQ邮箱，需要设置独立账号授权码
    with open('./__temp/email_auth', 'r', encoding='utf-8') as f:
        auth_key = f.read().strip()
        smtper.login(sender, auth_key)
        smtper.sendmail(sender, receivers, message.as_string())
        print('邮件发送完成!')


# 发送带附件的邮件
def send_email_mult():

    # 创建带附件的邮件实例
    message = MIMEMultipart()
    message['Subject'] = Header('附件发送', 'utf-8')
    message['From'] = Header('Hicker', 'utf-8')
    message['To'] = Header('humanbeings', 'utf-8')

    with open('./__temp/email_auth', 'r', encoding='utf-8') as f:
        # 把auth key 作为文本发送出去
        auth_key = f.read().strip()
        # 设置附件内容
        txt = MIMEText('授权码：{0}'.format(auth_key), 'base64', 'utf-8')
        txt['Content-Type'] = 'text/plain'
        txt['Content-Disposition'] = 'attachment; filename=auth.txt'
        # 将附件挂在到message对象
        message.attach(txt)

        greeting = MIMEText('\nSir, the auth key here', 'plain', 'utf-8')
        message.attach(greeting)

        smtper = SMTP('smtp.qq.com')
        sender = 'bearcambridge@qq.com'
        smtper.login(sender, auth_key)
        smtper.sendmail(sender, ['444122662@qq.com'], message.as_string())
        smtper.quit()
        print('email sended')


if __name__ == '__main__':
    # send_email()
    send_email_mult()
