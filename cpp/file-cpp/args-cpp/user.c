#include <sys/types.h>
#include <pwd.h>

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main()
{
	uid_t uid;
	gid_t gid;
	struct passwd *pw;
       uid = getuid();
	gid = getgid();
 	
	printf("User is %s\n",getlogin());

	pw = getpwuid(uid);

	printf("UID passwd entry:\n name=%s,uid=%d",pw->pw_name,pw->pw_uid);

	pw = getpwnam("root");
	printf("name=%s,uid=%d",pw->pw_name,pw->pw_uid);
	exit(0);

}



