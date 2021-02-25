from flask import Flask, request

app = Flask(__name__)

@app.route('/secret')
def get_current_time():
    x = request.args['word']
    if x == 'abc':
        return {'status': 1}
    else:
        return {'status': 0}
