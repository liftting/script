__author__ = 'wm'
# coding=utf-8

#导入我们需要用到的包和类并且起别名
import sys
from com.android.monkeyrunner import MonkeyRunner as mr

#connect device 连接设备
#第一个参数为等待连接设备时间
#第二个参数为具体连接的设备
device = mr.waitForConnection(1.0,'e0d98451')
if not device:
    print >> sys.stderr,"fail"
    sys.exit(1)
mr.sleep(1.0)
result = device.takeSnapshot()

#save to file 保存到文件
result.writeToFile('./shot1.png','png');