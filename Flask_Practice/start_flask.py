from flask import Flask, request
import json
import face.examples.knn_ImageFile_TF as knn
import finger.compare_Finger as cf
from finger import example_downloadimage as ed
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getFinger', methods=['post'])
def getFinger():
    is_true = ed.get_finger()
    print(is_true)
    print(type(is_true))

    if is_true == "00":
        with open('finger/fingerprint.bmp', 'rb') as image:
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

@app.route('/compareFinger', methods = ['post'])
def compareFinger():
    print(request.get_json())
    data = request.get_json(force=True)
    print("data", data)
    name = data['name']
    arc = cf.compareFinger(name)
    print("arc",arc)
    if arc[0][0] >= 0.8:
        data = json.dumps({"code": "00"})
    else:
        data = json.dumps({"code": "01"})

    return data

@app.route('/getImg', methods=['post'])
def putFingerImg():
    print(1)
    try:
        # img와 코드를 저장
        data = request.get_json()
        print(data)
        name = data['name']
        print(name)
        img = data['img']

        # base를 디코딩하고 find.jpg로 저장
        file = base64.b64decode(str(img).split(',')[1])
        filename = 'face/find.jpg'
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