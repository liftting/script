#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>


char *menu[] = {"a - add new record",
		"d - delete record",
		"q - quit",
		NULL,
};

int getchoice(char *greet,char *choices[]);

int main()
{
	int choice = 0;
	do 
	{
		choice = getchoice("please select an antion",menu);
		printf("You have chosen : %c\n",choice);
	} while(choice != 'q');
}

// choices 存储的是字符指针
int getchoice(char *greet,char *choices[])
{
	int chosen = 0;
	int selected;
	char **option;

	do {
		printf("choice:%s\n",greet);
		option = choices; // 执行数组的第一个位置指针
		while(*option){
			printf("%s\n",*option); // 取出第一个指针指向的数据
			option++;
		}

		selected = getchar(); // 接受控制端的输入操作，
		option = choices;
		while(*option){
			if(selected == *option[0]){
				chosen = 1;
				break;
			}
			option++;
		}

		if(!chosen){
			printf("Incorrect choice,select again\n");
		}
	} while(!chosen);
	return selected;

}



