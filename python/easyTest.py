__author__ = 'wm'

from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice
from com.android.monkeyrunner.easy import EasyMonkeyDevice
from com.android.monkeyrunner.easy import By

device = MonkeyRunner.waitForConnection()
easy_device = EasyMonkeyDevice(device)
easy_device.startActivity(component='com.xuanwu.etion/.SplashActivity')
# 输入用户名
device.type('mzba')
# 触摸密码框，相当于获取焦点
easy_device.touch(By.id('id/login_edit_pwd'), MonkeyDevice.DOWN_AND_UP)
# 输入密码
device.type('888888')
# 按下返回键，相当于关闭输入法的弹出框
device.press('KEYCODE_BACK', MonkeyDevice.DOWN_AND_UP)
# easy_device.touch(By.id('id/login_edit_account'), MonkeyDevice.DOWN_AND_UP)        #点击登录按钮
easy_device.touch(By.id('id/login_btn'), MonkeyDevice.DOWN_AND_UP)
