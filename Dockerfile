#设置构建的基础镜像
FROM node:18.14.2
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN  mkdir -p  /hometown-h5-template
WORKDIR /hometown-h5-template
COPY . .
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm i
CMD npm run dev
EXPOSE 8080






