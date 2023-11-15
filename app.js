const socket = io('https://msg-alem.vercel.app/');

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    console.log('Sending message:', message);

    if (message.trim() !== '') {
        fetch('/api/message', {
            method: 'POST',
@@ -14,6 +14,7 @@ function sendMessage() {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
                if (data.success) {
                    messageInput.value = '';
                } else {
@@ -23,17 +24,3 @@ function sendMessage() {
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
