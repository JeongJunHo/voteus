#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
PyFingerprint
Copyright (C) 2015 Bastian Raschke <bastian.raschke@posteo.de>
All rights reserved.

"""

import tempfile
from pyfingerprint.pyfingerprint import PyFingerprint
import os
import time

'''
지문센서로 부터 지문 이미지를 얻어와 라즈베리파이에 fingerprint.bmp로 저장하는 코드
code
00 : 저장 성공
01 : 저장 실패
03 : 시간 초과

최종 수정일 2020.02.05 09:32
박종수

'''
def get_finger():
    print('start files')
    try:
        '''
        usb port에 연결하여 지문센서 연결 여부를 확인
        '''
        f = PyFingerprint('/dev/ttyUSB0', 57600, 0xFFFFFFFF, 0x00000000)
        print('get print')
        # if ( f.verifyPassword() == False ):
        #   raise ValueError('The given fingerprint sensor password is wrong!')

    except Exception as e:
        print('The fingerprint sensor could not be initialized!')
        print('Exception message: ' + str(e))
        #exit(1)
        return "01"

    ## Gets some sensor information
    # print('Currently used templates: ' + str(f.getTemplateCount()) +'/'+ str(f.getStorageCapacity()))

    startTime = time.time()
    print(startTime)
    ## Tries to read image and download it
    try:
        '''
        지문을 인식할 때 까지 대가하는 코드
        '''
        print('Waiting for finger...')

        ## Wait that finger is read
        while (f.readImage() == False):
            if startTime-time.time() > 10000:
                return "03"
            pass

        print('Downloading image (this take a while)...')

        '''
        지문 센서로 부터 이미지를 얻어서 imageDestination에 저장하는 코드
        현재 imageDestination은 라즈베리파이의 root폴더 아래의 tmp폴더에
        fingerprint.bmp라는 파일명으로 저장되게 되어있다.

        issue 지문 저장장소가 tmp폴더에 되어있는데 이것을 지금 위치의 폴더에 저장해야 할듯....
        '''
        imageDestination =  tempfile.gettempdir() + '/fingerprint.bmp'
        print(imageDestination)
        imageDestination = os.path.dirname(os.path.realpath(__file__))+'/fingerprint.bmp'
        f.downloadImage(imageDestination)

        print('The image was saved to "' + imageDestination + '".')
        return "00"

    except Exception as e:
        print('Operation failed!')
        print('Exception message: ' + str(e))
        #exit(1)
        return "01"


