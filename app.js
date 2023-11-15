function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    console.log('Sending message:', message);

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
                console.log('Response:', data);
                if (data.success) {
                    messageInput.value = '';
                } else {
                    console.error('Failed to send message:', data.error);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
}
