from flask import Flask, request
import json
app = Flask(__name__)


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


if __name__ == '__main__':
    app.run(host='0.0.0.0')