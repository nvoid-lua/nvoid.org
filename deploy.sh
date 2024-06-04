#!/bin/bash

set -e
cd ./docs/
rm -rf configuration
git clone https://github.com/nvoid-lua/nvoidocs.git configuration
cd ../
yarn clear
yarn build
cd ./build/
git init
git branch -M Deployment
git add -A
git commit -m 'deploy'
git push -f git@github.com:nvoid-lua/nvoid.org Deployment
cd -
git add -A
git commit -m 'website'
git push -f git@github.com:nvoid-lua/nvoid.org main
