#!/bin/sh

read timetoday

case "$timetoday" in
	yes) echo "yes one";;
	no) echo "no two";;
esac

exit 0


