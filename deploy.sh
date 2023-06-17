#!/bin/bash

set -e
yarn clear
yarn build
cd ./build/
git init
git branch -M Deployment
git add -A 
git commit -m 'deploy'
git push -f git@github.com:nvoid-lua/nvoid.org.src Deployment
cd -
git add -A
git commit -m 'website'
git push -f git@github.com:nvoid-lua/nvoid.org.src main
