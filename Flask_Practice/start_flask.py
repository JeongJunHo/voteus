from flask import Flask, request
import json
import examples.knn_ImageFile_TF as knn
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

@app.route('/getImg', methods=['post'])
def put_img():
    print(1)
    data = request.get_json()
    print(data)
    img = data['img']
    print(img)
    #print(request.files['img'])
    #f = request.files['img']
    file = base64.b64decode(str(img).split(',')[1])
    # print("file : ")
    # print(file)
    # # f = Image.open(io.BytesIO(file))
    filename = 'find.jpg'
    # f = open(filename, 'wb')
    # f.write(file)
    with open(filename, 'wb') as f:
        f.write(file)
    print(2)
    # print(f)
    file = open('find.jpg', 'r')
    data = json.dumps(knn.get_name(file))
    print(3)
    return data

@app.route('/getJJ', methods=['post'])
def jj():
    data = json.dumps({"jun":"asdf"})
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0')