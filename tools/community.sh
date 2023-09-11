#!/bin/bash

yarn install
rm -rf ./docs/community
cp -r ./node_modules/wam-community/dist ./docs/community

