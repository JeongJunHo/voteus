from flask import Flask, request
import json
import examples.knn_ImageFile_TF as knn
from flask_cors import CORS
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
    f = request.files['img']
    print(2)
    print(f)
    data = json.dumps(knn.get_name(f))
    print(3)
    return data

@app.route('/getJJ', methods=['post'])
def jj():
    data = json.dumps({"jun":"asdf"})
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0')