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
    
    def select_keywords(self):
        sql = "SELECT * FROM KEYWORD"
        self.curs.execute(sql)
        result = self.curs.fetchall()
        return result
    
    def delete_keywords(self):
        sql = "DELETE FROM KEYWORD"
        self.curs.execute(sql)
        self.conn.commit()

    def close(self):
        self.curs.close()

    def max_keywordID(self):
        sql = "select MAX(keywordID) from KEYWORD"
        self.curs.execute(sql)
        result = self.curs.fetchall()
        return result[0]['MAX(keywordID)']

    def categoryID(self, category):
        ct_dict = {'정치': 1, '경제': 2, '사화': 3, '세계': 4, 'IT/과학': 5}
        return ct_dict[category]
