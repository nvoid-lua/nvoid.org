#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:nvoid-lua/nvoid.org master
cd -
git add -A
git commit -m "nvoid.org"
git push git@github.com:nvoid-lua/nvoid.org.src
