function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        displayMessage(message);
        messageInput.value = '';
    }
}

function displayMessage(message) {
    var messageContainer = document.getElementById('message-container');

    var newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.textContent = message;

    messageContainer.insertBefore(newMessage, messageContainer.firstChild);
}
