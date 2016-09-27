#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

char message[] = "hello world";

int main()
{
	pthread_t a_thread;
	void *thread_result;
	int res = pthread_create(&a_thread,NULL,thread_function,(void *)message);
	
}

void *thread_function(void *arg){
	printf("thread function running");
}

