import serial

ser = serial.Serial('/dev/ttyACM0', 9600)
print('start serial')

while 1:


    a = ser.readline()
    print (a)