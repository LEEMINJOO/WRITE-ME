# WRITEME
오늘의 뉴스 키워드를 뽑아 매일 글감을 주는 웹블로그


## model - python
- 네이버 뉴스 '가장 많이 본 뉴스'에서 주제별로 30개 기사 크롤링
  - `./model/utils/crawling.py`
- 각 주제별로 TF-IDF를 이용한 토픽 추출
  - `./model/utils/topic.py`
  - 참고문헌 : 소문난 명강의 김기현의 자연어 처리 딥러닝 캠프
    - `./model/TF-IDF.ipynb`
- 전체 process example
  - `./model/example.ipynb`

## docker
 ` docker build -t readme_model_env -f Dockerfile . `
