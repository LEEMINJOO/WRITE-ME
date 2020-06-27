## model - python
- 기능
  - 네이버 뉴스 '가장 많이 본 뉴스'에서 주제별로 30개 기사 크롤링
    - `./model/utils/crawling.py`
  - 각 주제별로 TF-IDF를 이용한 토픽 추출
    - `./model/utils/keyword.py`
  - 전체 process
    - `./model/script.py`

- Docker 환경
  - ` docker build -t readme_model_env -f Dockerfile . `