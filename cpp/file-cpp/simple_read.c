#include <stdlib.h>
#include <unistd.h>

int main()
{
	char buffer[128];
	int nread;
	nread = read(0,buffer,128);
	if(nread==-1)
		write(2,"error",5);
	if((write(1,buffer,nread))!=nread)
		write(2,"error",5);

	exit(0);
}

