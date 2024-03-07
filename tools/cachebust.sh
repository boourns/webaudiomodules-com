#!/bin/bash

set -e

curl -X POST "https://api.cloudflare.com/client/v4/zones/f0e13bba295f60b8411df8f4e685fc34/purge_cache" \
     -H "Authorization: Bearer D9XsjXtrGCzV4EnxdkWxyndiNOSPdNJy236cxVO9" \
     -H "Content-Type:application/json" -d '{ "purge_everything": true }'
     