// Function to add a task to the Smart Planner
function addTask() {
  const taskInput = document.getElementById('task'); 
  const taskList = document.getElementById('task-list');  
  const task = taskInput.value.trim();  

  if (task) {
    const listItem = document.createElement('li');  
    listItem.textContent = task;  
    taskList.appendChild(listItem);  
    taskInput.value = '';  
  } else {
    alert("Please enter a task!");  
  }
}

// Function for AI Chatbot (Basic Placeholder)
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatResponses = document.getElementById('chatbot-responses');
  const message = userInput.value.trim();

  if (message) {
    const userMessage = document.createElement('p');
    userMessage.textContent = "You: " + message;
    chatResponses.appendChild(userMessage);

    const botMessage = document.createElement('p');
    botMessage.textContent = "Bot: I'm here to help with school and sports stress!";
    chatResponses.appendChild(botMessage);

    userInput.value = '';
  }
}
