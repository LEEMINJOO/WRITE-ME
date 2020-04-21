import requests
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime


def get_top_30(category, date=None):
    if date is None:
        now = datetime.now()
        date = '%04d%02d%02d' % (now.year, now.month, now.day)
        
    main = 'https://news.naver.com'
    category_url = 'https://news.naver.com/main/ranking/popularDay.nhn?rankingType=popular_day&sectionId='
    
    category_id = get_category_id(category)
    url = category_url + category_id + '&date=' + date
    htmls = get_htmls(url)

    cols = ['title', 'text', 'url']
    df = pd.DataFrame(columns=cols)
    for html in htmls:
        a = html.find('a')
        sub_title = a.attrs['title']
        sub_url = a.attrs['href']
        text = get_text(main+sub_url)
        df = df.append({'title': sub_title,
                        'text': text,
                        'url': main+sub_url}, ignore_index=True)
    df['category'] = category
    df['date'] = date
    return df


def get_all_top_30():
    categories = ['정치', '경제', '사회', '세계', 'IT/과학']

    cols = ['title', 'text', 'url', 'category', 'date']
    df = pd.DataFrame(columns=cols)
    for category in categories:
        df = df.append(get_top_30(category), ignore_index=True)
    return df


def get_category_id(category):
    cat_dict = {'정치': '100',
                '경제': '101',
                '사회': '102',
                '세계': '104',
                'IT/과학': '105', }
    return cat_dict[category]


def get_htmls(url):
    breq = requests.get(url)
    bsoup = BeautifulSoup(breq.content, 'html.parser')
    return bsoup.select('.ranking_headline')


def get_text(url):
    breq = requests.get(url)
    bsoup = BeautifulSoup(breq.content, 'html.parser')
    text = bsoup.select('#articleBodyContents')[0].text
    text = text.replace('\n', " ")
    text = text.replace('\t', " ")
    text = text.replace(
        "// flash 오류를 우회하기 위한 함수 추가 function _flash_removeCallback() {}", "")
    return text