sonar:
	docker-compose start sonarscanner && docker-compose logs -f sonarscanner

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix
