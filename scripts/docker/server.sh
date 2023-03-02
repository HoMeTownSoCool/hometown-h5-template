temp=$(pwd)
docker run -d -p 8080:8080 -v ${temp}/src:/hometown-h5-template/src hometown-h5-template
