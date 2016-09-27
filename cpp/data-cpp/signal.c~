#include <signal.h>
#include <stdio.h>
#include <unistd.h>


// 信号到来处理
// SIG_IGN 忽略信号，不处理，SIG_DFL 恢复默认行为， 
// 也可以自定义处理函数（必须有一个int类型参数作为信号的代码）
// 这里第一次调用是自定义的函数处理，而后续就转换为了默认的处理方式

void ouch(int sign)
{
	printf("OUCH - I get signal %d\n",sign);
	(void) signal(SIGINT,SIG_DFL);
}

int main()
{
	(void) signal(SIGINT,ouch);
	while(1)
	{
		printf("hello!\n");
		sleep(1);
	}
}


