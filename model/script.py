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
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + '\033[94m'+'Hi~'+'\033[0m')
    
    db = WRITEMEDataBase()

    now = datetime.now()
    date = '%04d%02d%02d' % (now.year, now.month, now.day)
    time = now.strftime("%p").lower()

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Getting News~')
    news = get_all_top_30()
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Making Keyword & Hint table ~')
    keywords = news.groupby('category').apply(get_keywords)

    t = tqdm(total=25)
    for category, keywordss in tqdm(keywords.iteritems()):
        db.insert_keywords(keywordss, category, date, time)
        news_cat = news[news['category']==category]
        for keyword in keywordss:
            news_keyword = news_cat[news_cat['text'].str.contains(keyword)]
            n = len(news_keyword)
            news_search = get_search_news(keyword, news=n).iloc[:n]

            hints = get_keywords(pd.concat([news_keyword, news_search], axis=0), only_noun=True, n=10)
            if keyword in hints:
                hints.remove(keyword)
            hints = hints[:9]

            keywordID = db.keywordID(keyword, db.categoryID(category))
            db.insert_hints(keywordID, hints)
            t.update(1)
    t.close()
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    db.close()
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + '\033[94m'+'Bye~'+'\033[0m')
