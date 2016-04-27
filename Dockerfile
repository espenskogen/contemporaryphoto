FROM centos

MAINTAINER Espen Skogen <espen@skogen.org>

RUN mkdir -p /usr/src/contemporaryphoto

WORKDIR /usr/src/contemporaryphoto

RUN yum -y install epel-release
RUN yum -y install nodejs
RUN yum -y install npm

COPY package.json /usr/src/contemporaryphoto

RUN npm install

EXPOSE 3000



COPY ./build ./contemporaryPhotography

CMD ["node", "/usr/src/contemporaryphoto/contemporaryPhotography/server.js"]



