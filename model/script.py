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
    
    host = 'write-me.csuwdm9tp2la.ap-northeast-2.rds.amazonaws.com'
    db = WRITEMEDataBase(host=host, password='readme2020')

    now = datetime.now()
    date = '%04d%02d%02d' % (now.year, now.month, now.day)
    time = now.strftime("%p").lower()

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Getting News~')
    news = get_all_top_30()
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Making Keyword table ~')
    keywords = news.groupby('category').apply(get_keywords)
    for category, keyword in tqdm(keywords.iteritems()):
        db.insert_keywords(keyword, category, date, time)
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    keywordIDs = db.select_updated_keywordID(date, time)
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + 'Making Hint table ~')
    for keywordID in tqdm(keywordIDs):
        keywordName = db.keywordName(keywordID['keywordID'])
        search_news = get_search_news(keywordName)
        hints = get_keywords(search_news)
        if keywordName in hints:
            hints.remove(keywordName)
        db.insert_hints(keywordID['keywordID'], hints)
    print('\033[92m'+'COMPLETE!'+'\033[0m')

    db.close()
    print(datetime.now().strftime("%m/%d/%Y, %H:%M:%S | ") + '\033[94m'+'Bye~'+'\033[0m')
