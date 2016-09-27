#!/bin/bash

function fall()
{
	echo ">> begin into im"
	cd ~/work/im-work/lib-im/
	gradle uploadArchives

	echo ">> im has upload snapshot"

	echo ">> begin into imdemo"
	cd ~/work/im-demo/lib-imdemo/app/
	gradle installDebug

	echo ">> imdemo has exec installDebug"
}

function fonlyDemo()
{
	echo ">> begin into imdemo"
	cd ~/work/im-demo/lib-imdemo/app/
	gradle installDebug

	echo ">> imdemo has exec installDebug"

}

function fonlyUpload()
{
	echo ">> begin into im"
	cd ~/work/im-work/lib-im/
	gradle uploadArchives

}
function installImDemo() {
	#statements
	echo ">> begin to install only"
	adb install -r /Users/wm/work/im-demo/lib-imdemo/app/build/outputs/apk/app-debug.apk
}

echo "input:1 upload-and-compile,2 only compile,3 only upload"
iparam="$1" #要连在一起写，要不会当成命令

if [ ! -n $iparam ]
then
	echo ">>begin upload-and-compile"
	fali;
elif [ $iparam -eq 1 ]
then
	echo ">>begin upload-and-compile"
	fall;
elif [ $iparam -eq 2 ]
then
	echo ">>begin only-compile"
	fonlyDemo;
elif [ $iparam -eq 3 ]
then
	echo ">>begin only upload"
	fonlyUpload;
elif [ $iparam -eq 4 ]
then
	installImDemo;
fi

echo ">>end!!!!!!!!"
