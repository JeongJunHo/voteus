from flask import Flask, request
import json
import examples.knn_ImageFile_TF as knn
import example_downloadimage as ed
import base64
import io
from flask_cors import CORS
from PIL import Image
app = Flask(__name__)
CORS(app)




@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getData', methods=['post'])
def getData():
    data = { "a" : 500, "b": 300}
    a = 5;
    data = json.dumps(a)
    b = 3;
    data = json.dumps(b)
    return data

'''
지문센서에서 지문 데이터를 인식하고, 그 데이터를 저장하고, react에 전달하는 코드
example_downloadimage에서 fingerprint.bmp로 지문을 저장하는 코드

박종수

00 성공
01 실패
03 시간초과
'''
@app.route('/getFinger', methods=['post'])
def getFinger():
    is_true = ed.get_finger()
    print(is_true)
    print(type(is_true))

    if is_true == "00":
        with open('fingerprint.bmp', 'rb') as image:
            b64img = base64.b64encode(image.read())
        #print(b64img)

        print(type(b64img))
        #data = {"code": "05", "img": str(b64img)}

        data = json.dumps({"code": "00", "img": str(b64img)[2:-1]})
        #data = json.dumps(True)
    else:
        data = json.dumps({"code" : is_true})
        #data = json.dumps (False)
    return data

'''
react로 부터 사진(base64)과 이름(사람코드)를 받아서 일치여부를 확인해 주는 코드
knn_ImageFile_TF에서 knn을 통해 이미지를 분류받아 사람코드를 return받고 일치여부를 code에 담아 전달
code 00 일치
code 01 불일치
code 02 에러발생
박종수
'''
@app.route('/getImg', methods=['post'])
def put_img():
    print(1)

    try:
        # img와 코드를 저장
        data = request.get_json()
        name = data['name']
        print(name)
        img = data['img']

        # base를 디코딩하고 find.jpg로 저장
        file = base64.b64decode(str(img).split(',')[1])
        filename = 'find.jpg'
        with open(filename, 'wb') as f:
            f.write(file)
        print(2)
        file = open('find.jpg', 'r')

        # tmpname에 knn으로 부터 얻은 코드를 저장
        tmpname = knn.get_name(file)
        print('tmpname : ' + tmpname)

        # react로 받은 코드와 knn에서 나온 사람코드 값을 비교하여 일치여부를 json 파일로 저장 후 code에
        if tmpname == name:
            data = json.dumps({"code": "00"})
        else:
            data = json.dumps({"code": "01"})
        # data = json.dumps()
        print(3)
        return data

    except Exception as e:
        print('Operation failed!')
        print('Exception message: ' + str(e))
        data = json.dumps({"code": "02"})
        return data




@app.route('/getJJ', methods=['post'])
def jj():
    data = json.dumps({"jun":"asdf"})
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0')