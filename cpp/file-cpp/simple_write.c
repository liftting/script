#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{

	if((write(1,"here is some data\n",18)) == 19){
		write(2,"A write error has occured\n",17);
	}
	exit(0);

}

