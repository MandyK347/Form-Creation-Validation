// fetch-data.js

// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'http://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    // Fetch data using try-catch
    try {
        // Fetch the data and await the response
        const response = await fetch(apiUrl);
        
        // Covert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the <li> to the userList
            userList.appendChild(listItem);
        });

        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear the exitsing content and display error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMcontentLoaded
document.addEventListener('DOMContentLoaded', fetchUserDta);