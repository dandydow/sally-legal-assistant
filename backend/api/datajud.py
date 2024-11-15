from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

DATAJUD_API_URL = "https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search"
API_KEY = "APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="

@app.route('/datajud', methods=['GET'])
def get_process_info():
    query = request.args.get('query')
    headers = {
        "Authorization": API_KEY
    }
    response = requests.post(DATAJUD_API_URL, headers=headers, json={"query": query})
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5001, debug=True)
