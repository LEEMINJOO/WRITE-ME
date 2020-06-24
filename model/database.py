import pymysql

class WRITEMEDataBase:
    def __init__(self, host=None, password=None, user='admin', db = 'WRITEME', charset = 'UTF8'):
        if host is None:
            host = input('Host: ')
        if password is None:
            password = input('Password: ')

        self.conn = pymysql.connect(host=host, 
                                    user=user,
                                    password=password,
                                    db=db,
                                    charset=charset
                    )
        self.curs = self.conn.cursor(pymysql.cursors.DictCursor)

    def insert_keywords(self, keywords, category, date, time):
        sql = "INSERT INTO KEYWORD VALUES (%s, %s, %s, %s, %s)"
        max_ID = self.max_keywordID()
        if max_ID is None:
            max_ID = 0
        categoryID = self.categoryID(category)
        for i, keyword in enumerate(keywords):
            keywordID = max_ID + i + 1
            self.curs.execute("set names utf8")
            self.curs.execute(sql, (keywordID, categoryID, keyword, date, time))
        self.conn.commit()
    
    def insert_hints(self, keywordID, hints):
        sql = "INSERT INTO keywordHint VALUES (%s, %s, %s)"
        max_ID = self.max_hintID()
        if max_ID is None:
            max_ID = 0
        for i, hint in enumerate(hints):
            hintID = max_ID + i + 1
            self.curs.execute("set names utf8")
            self.curs.execute(sql, (keywordID, hintID, hint))
        self.conn.commit()
    
    def select(self, sql):
        self.curs.execute(sql)
        result = self.curs.fetchall()
        return result

    def delete(self, sql):
        self.curs.execute(sql)
        self.conn.commit()

    def select_keywords(self):
        return self.select("SELECT * FROM KEYWORD")
    
    def select_updated_keywordID(self, date, time):
        sql = "SELECT keywordID FROM KEYWORD WHERE date = %s AND time = '%s'" % (date, time)
        return self.select(sql)
    
    def select_hints(self):
        return self.select("SELECT * FROM keywordHint")
    
    def delete_keywords(self):
        sql = "DELETE FROM KEYWORD"
        self.delete(sql)
    
    def delete_hints(self):
        sql = "DELETE FROM keywordHint"
        self.delete(sql)

    def close(self):
        self.curs.close()

    def keywordName(self, keywordID):
        sql = "SELECT keywordName FROM KEYWORD WHERE keywordID = %d" % (keywordID)
        result = self.select(sql)
        return result[0]['keywordName']
    
    def keywordID(self, keywordName, categoryID):
        sql = "SELECT keywordID FROM KEYWORD WHERE keywordName = '%s' AND categoryID = %d" % (keywordName, categoryID)
        result = self.select(sql)
        return result[-1]['keywordID']

    def max_keywordID(self):
        sql = "select MAX(keywordID) from KEYWORD"
        result = self.select(sql)
        return result[0]['MAX(keywordID)']

    def max_hintID(self):
        sql = "select MAX(hintID) from keywordHint"
        result = self.select(sql)
        return result[0]['MAX(hintID)']   

    def categoryID(self, categoryName):
        ct_dict = {'정치': 1, '경제': 2, '사회': 3, '세계': 4, 'IT/과학': 5}
        return ct_dict[categoryName]
    
    def categoraName(self, categoryID):
        ct_dict = {1: '정치', 2: '경제', 3: '사회', 4: '세계', 5: 'IT/과학'}
        return ct_dict[categoryID]
