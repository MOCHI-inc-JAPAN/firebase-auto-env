#!/usr/bin/env sh

if [ ! -e $1 ]; then
  echo "$1 is not found"
  exit 0;
fi;

export $(cat "$1" | grep -v ^\# | xargs);

namespace=${2:-'hosting'};
args=()

texts=$(cat "$1" | grep -v ^\#)

for line in $texts
do
  args+=($namespace.$( echo $line | tr '[:upper:]' '[:lower:]'))
done ;

firebase functions:config:set ${args[@]}

echo ${args[@]}
