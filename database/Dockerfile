FROM mysql:latest

ENV MYSQL_DATABASE=foodtracker
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=password
ENV MYSQL_ROOT_PASSWORD=root_password

COPY ./foodtracker.sql /docker-entrypoint-initdb.d/

EXPOSE 3307