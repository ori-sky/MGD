all: deploy

deploy: $(shell find public/* -print)
	mkdir -p /usr/share/nginx/www/mgd
	cp -rf public/* /usr/share/nginx/www/mgd/
