# src https://hub.docker.com/r/theeluwin/ubuntu-konlpy/dockerfile
# from
FROM ubuntu:18.04
LABEL maintainer="Minjoo Lee <eminj1997@gmail.com>"

# apt init
ENV LANG=C.UTF-8
ENV TZ=Asia/Seoul
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get install -y --no-install-recommends tzdata g++ git curl

# java stuff
RUN apt-get install -y default-jdk default-jre

# # python stuff
# RUN apt-get install -y libssl-dev libmysqlclient-dev
RUN apt-get update
RUN apt-get install -y python3-pip python3-dev
RUN cd /usr/local/bin && \
    ln -s /usr/bin/python3 python && \
    ln -s /usr/bin/pip3 pip && \
    pip3 install --upgrade pip

# mysql 
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-server mysql-client


# apt cleanse
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# timezone
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# workspace
RUN mkdir -p /workspace
WORKDIR /workspace

# install python packages
RUN pip install jpype1-py3 konlpy
RUN cd /workspace && \
    curl -s https://raw.githubusercontent.com/konlpy/konlpy/master/scripts/mecab.sh | bash -s


# copying local file into container's /code/ directory
COPY ./model/requirements.txt /code/requirements.txt

# python configuration
RUN pip install -r /code/requirements.txt

# copying the rest of the files into container's /code/ directory
# container's working directory is /code/
# COPY . /code/
# WORKDIR /code/

# entry
# CMD ["python", "model/script.py"]
