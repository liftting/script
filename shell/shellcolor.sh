#!/bin/bash
RED_COLOR='\033[31m'
RES_END='\033[0m'

echo -e "${RED_COLOR}this is color${RES_END}"

function show()
{
	echo -e $1$2$3;

}

show ${RED_COLOR} 'this is color' ${RES_END}


