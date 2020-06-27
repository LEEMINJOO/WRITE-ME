# WRITEME
오늘의 뉴스 키워드를 뽑아 매일 글감을 주는 웹블로그

## 기획 의도
반복되는 일상으로 새로운 글을 쓰는 데 어려움을 느끼는 사람들에게 매일 새로운 글감을 제공함으로 글쓰기에 활기를 불어넣고, 글감을 뉴스로 한정지어 면접과 논술 준비를 위한 시상 상식 공부와 의견을 정리할 수 있는 공간을 제공하는 블로그

## 주요 기능
1. 매일 정해진 시간 분야별 새로운 뉴스 키워드 제공
2. 키워드에 대해 글 작성
3. 다른 사용자의 글 확인 & 포트폴리오 생성

## 기능 구현

### 1. model - python
- 기능
  - 네이버 뉴스 '가장 많이 본 뉴스'에서 주제별로 30개 기사 크롤링
    - `./model/utils/crawling.py`
  - 각 주제별로 TF-IDF를 이용한 토픽 추출
    - `./model/utils/keyword.py`
  - 전체 process
    - `./model/script.py`

- Docker 환경
  - ` docker build -t readme_model_env -f Dockerfile . `

### 2. frontend - react
### 3. backend - spring
