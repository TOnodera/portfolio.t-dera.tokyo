FROM nginx:1.25.3-bookworm

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  curl \
  wget \
  gnupg \
  ca-certificates \
  locales \
  gcc \
  build-essential \
  git \
  vim \
  openssh-client \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# ロケール設定
RUN sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen \
    && locale-gen \
    && update-locale LANG=ja_JP.UTF-8

# node, npm, npxを使えるようにする
RUN wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz \
    && tar xfv node-v20.11.0-linux-x64.tar.xz \
    && mv node-v20.11.0-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /node-v20.11.0-linux-x64/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /node-v20.11.0-linux-x64/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx
    
# 開発時に利用するユーザー
ARG userid=1000
RUN useradd -m -s /bin/bash -u ${userid} node
WORKDIR /home/node/app
RUN chown -R ${userid}:${userid} /home/node/app

# reactアプリケーションをビルドしてnginxのドキュメントルートに配置
COPY ./frontend /home/node/app
RUN rm -rf /usr/share/nginx/html \
  && cd /home/node/app \
  && npm ci \
  && npm run build \
  && mv /home/node/app/dist /usr/share/nginx/html \
  && chown -R nginx:nginx /usr/share/nginx/html

# 非ルートユーザーで起動
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
USER nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]


