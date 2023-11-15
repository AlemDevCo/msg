const socket = io('https://msg-alem.vercel.app/');

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    messageInput.value = '';
                } else {
                    console.error('Failed to send message:', data.error);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
}

function displayMessage(message) {
    var messageContainer = document.getElementById('message-container');

    var newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.textContent = message;

    messageContainer.insertBefore(newMessage, messageContainer.firstChild);
}

socket.on('message', (message) => {
    displayMessage(message);
});
