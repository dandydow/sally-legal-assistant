import requests

RASA_SERVER = "http://localhost:5005/webhooks/rest/webhook"
GPTNEO_API = "http://gptneo-server-endpoint.com/generate"

def process_message(user_message):
    # Step 1: Send the user's message to Rasa for initial intent classification
    rasa_response = requests.post(RASA_SERVER, json={"sender": "user", "message": user_message})
    rasa_data = rasa_response.json()

    # Step 2: Process Rasa's response
    if rasa_data and 'text' in rasa_data[0]:
        rasa_text = rasa_data[0]['text']
        # Check if the response needs advanced text generation
        if "use_gptneo" in rasa_data[0].get('custom', {}):
            gptneo_response = requests.post(GPTNEO_API, json={"input": user_message})
            gptneo_data = gptneo_response.json()
            return gptneo_data['generated_text']
        else:
            return rasa_text
    return "I'm sorry, I couldn't understand your request."

if __name__ == "__main__":
    user_input = input("You: ")
    response = process_message(user_input)
    print(f"SONNY: {response}")
