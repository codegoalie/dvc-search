#/bin/sh

set -e

. ~/.nvm/nvm.sh
nvm use

BROWSER=none npm start
