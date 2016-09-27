#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>


/*
 * 外部变量
 *optarg 如果有关联值，外部变量指向这个
 *optopt  如果有无法识别的变量，存储在这里
 *
 * optind 下一个待处理参数的索引
 *
 *
 */

int main(int argc,char *argv[])
{
	int opt;
	while((opt=getopt(argc,argv,":if:lr"))!=-1){

		switch(opt){
			case 'i':
			case 'l':
			case 'r':
				printf("option: %c\n",opt);
				break;
			case 'f':
				printf("filename: %s\n",optarg);
				break;
			case ':':
			        printf("option needs a value\n");
			        break;
			case '?':
			        printf("unkonw option: %c",optopt);
			        break;

		}

	}

	for(;optind < argc;optind++)
		printf("argument : %s\n",argv[optind]);
	exit(0);
}

