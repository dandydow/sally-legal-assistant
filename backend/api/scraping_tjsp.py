from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

TJSP_URL = "http://www.tjsp.jus.br/Consulta"

@app.route('/tjsp', methods=['GET'])
def get_tjsp_info():
    process_number = request.args.get('process_number')
    response = requests.get(f"{TJSP_URL}?ProcessNumber={process_number}")
    soup = BeautifulSoup(response.content, 'html.parser')

    # This is a placeholder: actual scraping logic depends on the HTML structure of TJSP's page
    # Example: Scrape process details
    process_details = {
        "status": soup.find('div', {'id': 'status'}).text,
        "details": soup.find('div', {'id': 'details'}).text
    }
    return jsonify(process_details)

if __name__ == "__main__":
    app.run(port=5002, debug=True)
