# ref https://wujincheon.github.io/wujincheon.github.io/natural%20language%20processing/2019/01/28/crawlingtfidf.html

import pandas as pd
from konlpy.tag import Mecab
from sklearn.feature_extraction.text import TfidfVectorizer


def get_keywords(df, n=5, version='mecab', only_noun=True):
    docs = get_docs(df)
    if only_noun:
        docs = to_nouns(docs, version)

    tfidf_vectorizer = TfidfVectorizer(min_df=1)
    tfidf_matrix = tfidf_vectorizer.fit_transform(docs)

    nouns = tfidf_vectorizer.get_feature_names()
    values = tfidf_matrix.sum(axis=0).tolist()[0]
    tfidf = pd.DataFrame({'nouns': nouns, 'values': values})
    tfidf.sort_values('values', ascending=False, inplace=True)

    return tfidf.head(n)['nouns'].values.tolist()


def get_docs(df):
    return (df['title'] + df['text']).tolist()


def to_nouns(docs, version):
    if version == 'mecab':
        parser = Mecab()
    else:
        parser = konlpy_import(version)
    nounslist = []
    for doc in docs:
        try:
            nouns = ' '.join(parser.nouns(doc))
        except:
            pass
        nounslist.append(nouns)
    return nounslist


def konlpy_import(version):
    if version == 'kkma':
        from konlpy.tag import Kkma
        return Kkma()
    elif version == 'komoran':
        from konlpy.tag import Komoran
        return Komoran()
    elif version == 'okt':
        from konlpy.tag import Okt
        return Okt()
