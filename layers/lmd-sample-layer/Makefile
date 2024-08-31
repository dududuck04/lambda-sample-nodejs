build-AwsLambdaLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	echo ${ARTIFACTS_DIR}
	rm "$(ARTIFACTS_DIR)/nodejs/package.json"