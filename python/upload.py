# coding=utf-8


i = 0;
while i < 10:
    i += 1;
    print(i);
print("end");

'''定义函数'''


def hello(name):
    return 'Hello is who name ' + name;


print(hello('wangming'))


# 函数内参数，重新赋值不会改变外部任何变量，参数存储在局部作用域中，
def try_to_change(n):
    n = 'this is new';


name = 'wangming';
try_to_change(name);
name;


# 传递数组，引用被修改了，
def try_to_change_array(n):
    n[0] = 'change';


array = ['one', 'two'];
try_to_change_array(array);
print(array);


# 字典格式数据
def init(data):
    data['first'] = {}
    data['middle'] = {}
    data['last'] = {}


storge = {}
init(storge);
print(storge);


# 函数带默认参数
def hello_1(first='hello', name='world'):
    print '%s and %s!' % (first, name);


hello_1();
hello_1('test', 'test');


#  *作用，收集其余的位置参数，输出元祖
def show(*params):
    print(params)


show(1, 2, 3, 4);
show();
show("this");


# ** 返回的是字典，而不是元祖
print("======")


def show(**params):
    print(params);


show();
# show(1);这样调用会出现异常
show(x=1)
show(x=1, y=2);

print('-------***---------')
x = 1;
scope = vars();  # vars()返回的是作用域中的不可见的字典，这个是不能修改的
y = scope['x']
print(y);

print('-------***---------')


def factor(n):
    if n == 1:
        return 1;
    else:
        return n * factor(n - 1);


result = factor(4);
print(result)

print('-------***---------')


# 二分
def search(array, number, lower, upper):
    if (lower == upper):
        assert number == array[upper];
        return upper;

    else:
        middle = (lower + upper) // 2;
        if (number > array[middle]):
            return search(array, number, middle + 1, upper);
        else:
            return search(array, number, lower, middle);


def search(array, number, lower=0, upper=None):
    if upper is None: upper = len(array) - 1;


array = [1, 5, 7, 8, 4, 6];
array.sort();

print(search(array, 1));

print('-------***-对象创建--------')


class Person:
    staticName = 'this is static ';  # 这叫类作用域内的变量，可以被所有的实例访问
    # 但是这个变量对于类 实例，又是有屏蔽作用的，

    def setName(self, name):
        self.name = name;  # 这里相当于设置了类对象的变量

    def getName(self):
        return self.name;

    def __notFound(self):
        print("this is not found data");

    def access(self):
        self.__notFound();

    def show(self):
        print("this is first class: %s" % self.name);


oneClass = Person();
oneClass.setName('ni hao a ');
oneClass.show();

# 函数的绑定，再传输到外面
tempFun = oneClass.show;
tempFun();

# 要是想让函数，变量变为私有，只要在名字前面加上双下划线即可

oneClass.access();

# 类的命名空间  直接在类中定义变量，相当于static
print(oneClass.staticName);

m1 = Person();
m2 = Person();

print(m1.staticName + ' and ' + m2.staticName);

m1.staticName = "change only one var";
# 变量的修改又是屏蔽了类范围变量
print(m1.staticName + ' and ' + m2.staticName);

print('-------*** 类继承---------')


class Filter:
    def init(self):
        self.blocked = []

    def filter(self, sequence):
        return [x for x in sequence if x not in self.blocked];


class SampleFilter(Filter):
    def init(self):
        self.blocked = ['one'];


f = Filter();
f.init();
print(f.filter([1, 2, 3]));

s = SampleFilter();
s.init();
print(s.filter(['one', 'two', 'three']));

print('-------*** 多个超类---------')


class Cal:
    def cal(self, exp):
        self.value = eval(exp);


class Talker:
    def talk(self):
        print 'my value is ', self.value;


class TalkCal(Cal, Talker):
    pass


tc = TalkCal();
tc.cal('1 + 2*3');
tc.talk();

print('-------***---------')
print('-------***---------')
print('-------***---------')
