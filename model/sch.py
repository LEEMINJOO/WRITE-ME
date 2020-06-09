import os
import schedule
import time

def job():
    os.system("python ./script_w_post.py")

schedule.every().day.at('18:40').do(job)
schedule.every().day.at('06:40').do(job)

while 1:
    schedule.run_pending()
    time.sleep(30)
