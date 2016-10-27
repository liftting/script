drop table if exist nums;

create table nums(
  a int unsigned not null primary key
)engine=innodb;

create procedure pCreateNums (cnt int unsigned)

begin
declare s int unsigned default 1;

truncate table nums;

insert into nums select s;

while s* 2 <=cnt do

begin
insert into nums select a+s from nums;
set s = s*2;
end;

end while;


end;

## 存在问题
