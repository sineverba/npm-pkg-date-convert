sonar:
	docker-compose start sonarscanner && docker-compose logs -f sonarscanner

upgrade:
	npx ncu -u
	npm install
	npm audit fix
