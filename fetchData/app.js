console.log("click")
document.getElementById('fetchButton').addEventListener('click', function() {
    const apiUrl = document.getElementById('apiUrl').value;
    const outputContainer = document.getElementById('outputContainer');


    if (apiUrl) {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                outputContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
            })
            .catch(error => {
                outputContainer.innerHTML = '<div class="error">Error: ' + error.message + '</div>';
            });
    } else {
        outputContainer.innerHTML = '<div class="error">Please enter a valid API URL.</div>';
    }
});