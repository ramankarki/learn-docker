https://www.sohamkamani.com/docker/mongo-replica-set/

docker service create --name xavier --network xavier --replicas 3 --health-cmd "node healthcheck.js" --health-start-period 10s --health-timeout 5s --health-interval 10s --health-retries 3 --update-order start-first --update-failure-action rollback --update-delay 5s --restart-condition on-failure --restart-max-attempts 5 --restart-window 100s ramankarki/xavier:a

docker container run --name nginx --network xavier --rm -v /nginx-conf:/etc/nginx/conf.d -v /etc/letsencrypt:/etc/letsencrypt -p 80:80 -p 443:443 -d nginx

docker container exec -it nginx service nginx reload

certbot certonly --standalone -d www.update.xavierinternationaledu.com -d update.xavierinternationaledu.com

# look for image file system

docker run -it --entrypoint //bin/sh ramankarki/veerjara-api:a
