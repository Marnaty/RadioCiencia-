function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");
    
    if (userInput) {
        const userMessage = document.createElement("div");
        userMessage.textContent = "Tú: " + userInput;
        chatbox.appendChild(userMessage);
        
        // Aquí puedes agregar la lógica de respuesta del chatbot
        const botResponse = document.createElement("div");
        botResponse.textContent = "Bot: " + "No tengo una respuesta, pero gracias por tu mensaje!";
        chatbox.appendChild(botResponse);
        
        document.getElementById("userInput").value = ""; // Limpiar el input
        chatbox.scrollTop = chatbox.scrollHeight; // Desplazar hacia abajo
    }
}


