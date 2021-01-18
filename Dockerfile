FROM nginx:1.15.2-alpine-perl
# FROM 10.10.16.81:5000/nginx:1.15.2-alpine-perl

RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html
RUN mkdir -p /var/www/html/static

COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
#COPY nginx_config/hosts-tail /etc/hosts

COPY /build /var/www/html

RUN chown nginx:nginx /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
