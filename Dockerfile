FROM registry.access.redhat.com/ubi8/nginx-120
COPY ./nginx.conf /etc/nginx
COPY ./build/ /usr/share/nginx/html
USER nginx
EXPOSE 3000
CMD nginx -g "daemon off;" 
