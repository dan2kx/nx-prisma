.DEFAULT_GOAL := up

# API + Frontend
build: # Brings up remote cluster pointed at the .qa.env
	docker-compose -f docker-compose.yml build --parallel ${ARGS};

up: # Brings up remote cluster pointed at the .qa.env
	export INTERNAL_IP=$(shell ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | awk '{print $1}'); \
	docker-compose -f docker-compose.yml up ${ARGS} | grep -vE '] "OPTIONS ';

down: # Brings up remote cluster pointed at the .qa.env
	docker-compose -f docker-compose.yml down ${ARGS};

kill: # Brings up remote cluster pointed at the .qa.env
	docker-compose -f docker-compose.yml down --volumes ${ARGS};

# db: # create and seed db
# 	docker-compose exec app npx prisma db push --accept-data-loss && \
# 	docker-compose exec app npx prisma db seed --preview-feature;

# studio: # open 
# 	docker-compose exec app npx prisma studio --browser none;

# migrate: # create
# 	docker-compose exec app npx prisma migrate dev --name ${NAME};
