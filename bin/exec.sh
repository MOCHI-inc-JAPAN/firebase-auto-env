#!/usr/bin/env bash

for OPT in "$@"
do
    case $OPT in
        --test)
            TEST_FLAG=1
            shift
            ;;
    esac
done

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
  args+=( $namespace.$( echo $line | awk -F'=' '{st = index($0,"="); print tolower($1)"="substr($0, st+1)}' ) )
done;

if [ ! "$TEST_FLAG" ]; then
  firebase functions:config:set ${args[@]}
fi

echo ${args[@]}
