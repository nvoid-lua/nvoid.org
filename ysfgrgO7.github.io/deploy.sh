#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist
echo 'www.nvoid.xyz' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ysfgrgO7/ysfgrgO7.github.io.git master
cd -
