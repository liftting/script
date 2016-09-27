#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>

#define NEED_BYTES (1024 * 1024)

int main()
{
	char *mem;
	int byte = NEED_BYTES;
	int exit_code = EXIT_FAILURE;
	mem = (char *)malloc(byte);
	if(mem != NULL){
		sprintf(mem,"dada");
		printf("%s",mem);
		free(mem);
		exit_code = EXIT_SUCCESS;

	}
	exit(exit_code);

}



