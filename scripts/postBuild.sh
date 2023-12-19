#!/bin/bash

current_date=$(date "+%Y-%m-%d")

# Escape special characters in the date for sed
escaped_date=$(echo "$current_date" | sed 's/[&/\]/\\&/g')

# Use sed to replace BUILD_DATE in the specified file
sed -i "" "s/BUILD_DATE/\"$escaped_date\"/g" ./build/*.js


# sed -i "s/BUILD_DATE/$(date +%Y-%m-%d)/g" ./build/index.js
# cat ./build/index.js | esbuild --minify --define:BUILD_DATE=\"$(date +%Y-%m-%d)\" > ./build/index.js.tmp
# mv ./build/index.js.tmp ./build/index.js
