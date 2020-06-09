import warnings
warnings.filterwarnings('ignore')

from datetime import datetime
from tqdm import tqdm
import pandas as pd

from utils import get_all_top_30
from utils import get_keywords
from utils import get_search_news
from database import WRITEMEDataBase


if __name__ == '__main__':
    with open('log.txt', 'a') as log:
        log.write(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'START\n')

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + '\033[94m'+'Hi~'+'\033[0m')
    
    db = WRITEMEDataBase()

    now = datetime.now()
    date = '%04d%02d%02d' % (now.year, now.month, now.day)
    time = now.strftime("%p").lower()

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Getting News~')
    news = get_all_top_30()
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    # keywords
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Making Keyword & Hint table ~')
    keywords = news.groupby('category').apply(get_keywords)

    t = tqdm(total=25)
    for category, keywordss in tqdm(keywords.iteritems()):
        # insert keywords
        db.insert_keywords(keywordss, category, date, time)
        news_cat = news[news['category']==category]
        for keyword in keywordss:
            # news for keyqord
            news_keyword = news_cat[news_cat['text'].str.contains(keyword)]
            n = len(news_keyword)
            news_keyword = pd.concat([news_keyword, get_search_news(keyword, news=n).iloc[:n]], axis=0)

            # hints
            hints = get_keywords(news_keyword, only_noun=True, n=10)
            if keyword in hints:
                hints.remove(keyword)
            hints = hints[:9]
            # insert hints
            keywordID = db.keywordID(keyword, db.categoryID(category))
            db.insert_hints(keywordID, hints)

            # post
            categoryID = db.categoryID(category)
            for i in range(len(news_keyword)):
                postTitle = news_keyword.iloc[i]['title']
                postDetail = news_keyword.iloc[i]['text']
                userID = 'test1'

                a = (postTitle, postDetail, userID, keywordID, categoryID, date)
                sql = "INSERT INTO POST (`postTitle`, `postDetail`, `userName`, `keywordID`, `categoryID`, `date` ) VALUES (%s, %s, %s, %s, %s, %s)"
                db.curs.execute("set names utf8")
                db.curs.execute(sql, a)

            t.update(1)
    t.close()
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    db.close()
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + '\033[94m'+'Bye~'+'\033[0m')

    with open('log.txt', 'a') as log:
        log.write(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'END\n')