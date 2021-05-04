#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

npm run build
 
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/zenzenlin/Vue-Hottoys.git master:gh-pages

cd -