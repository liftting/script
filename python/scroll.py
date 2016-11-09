__author__ = 'wm'

from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

device = MonkeyRunner.waitForConnection()

for i in range(1, 20):
    for j in range(1, 40):
        device.drag((110, 800), (880, 800), 0.1, 5)
    for k in range(1, 40):
        device.drag((880, 800), (110, 800), 0.1, 5)
