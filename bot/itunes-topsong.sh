#!/bin/bash
dirname="/home/vagrant/workspace/itunes-topsong-rss"
mkdir -p $dirname
filename="${dirname}/houry-topsong-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawBot; halug18@gmail.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml