# 基于SMTP的邮件传输功能
from smtplib import SMTP
from email.header import Header
from email.mime.text import MIMEText


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


if __name__ == '__main__':
    send_email()
