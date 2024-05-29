from flask import Flask, jsonify, request
import asyncio
import rlapi

app = Flask(__name__)

client_id = 'YOUR_CLIENT_ID'  # Remplace par ton client ID
client_secret = 'YOUR_CLIENT_SECRET'  # Remplace par ton client secret

async def get_player_data(player_id):
    client = rlapi.Client(client_id=client_id, client_secret=client_secret)
    player = await client.get_player(player_id, None)
    return player

@app.route('/api/player/<player_id>', methods=['GET'])
def player_data(player_id):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    player = loop.run_until_complete(get_player_data(player_id))
    return jsonify(player)

if __name__ == '__main__':
    app.run(debug=True)