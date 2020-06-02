import os
import schedule
import time

def job():
    os.system("python ./script.py")

schedule.every().day.at('19:00').do(job)
schedule.every().day.at('7:00').do(job)

while 1:
    schedule.run_pending()
    time.sleep(1)
