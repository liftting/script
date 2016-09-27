#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

//外部引用
extern char **environ;

int main()
{
	char **env = environ;

	while(*env){
		printf("%s\n",*env);
		env++;
	}
	exit(0);
}

