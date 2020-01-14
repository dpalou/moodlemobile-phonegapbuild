#!/bin/bash
#
# Script for generating the Mobile builds on Phonegap build
#

npm install -g pgb-cli

echo "{\"authtoken\":\"$PGB_TOKEN\"}" > ~/.pgbrc

# Retrieve keys
pgb keys --json > /tmp/pgbkeys.json

ANDROID_KEY=`jq -r '.keys .android .all | map(select(.title | startswith("moodlemobile")))[0].id' /tmp/pgbkeys.json`

if [ "$TRAVIS_BRANCH" == 'master' ] ; then
    IOS_KEY=`jq  -r '.keys .ios .all | map(select(.title | startswith("moodlemobile")) | select(.role | contains("dist")))[0].id' /tmp/pgbkeys.json`
else
    IOS_KEY=`jq -r '.keys .ios .all | map(select(.title | startswith("moodlemobile")) | select(.role | contains("dev")))[0].id' /tmp/pgbkeys.json`
fi

echo "{\"keystore_password\":\"$KEY_UNLOCK\",\"key_password\":\"$CERT_UNLOCK\"}" | pgb unlock android $ANDROID_KEY
echo "{\"key_password\":\"$KEY_UNLOCK\"}" | pgb unlock ios $IOS_KEY

pgb clone --exit-code --no-progress $APP_ID ios-key=$IOS_KEY android-key=$ANDROID_KEY

if [ ! -z $GIT_TOKEN ] && [ "$TRAVIS_BRANCH" == 'master' ] ; then
    git clone -q https://$GIT_TOKEN@github.com/moodlemobile/bma-apps-builds.git ../apps
    cd ../apps

    pgb download $APP_ID android android.apk
    pgb download $APP_ID ios ios.ipa

    git add .
    git commit -m "Mobile versions from Travis build $TRAVIS_BUILD_NUMBER"
    git push
fi
