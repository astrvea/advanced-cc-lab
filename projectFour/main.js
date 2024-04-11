document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally
  
  // Retrieve the selected agent from the dropdown list
  const selectedAgent = document.getElementById("agent").value;

  // Construct the API URL with the selected agent's name
  const searchUrl = "https://valorant-api.com/v1/agents?name=" + encodeURIComponent(selectedAgent);

  console.log("Fetching data from:", searchUrl); // Log the URL being fetched

  // Fetch data from the API
  fetch(searchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parses the JSON response body.
    })
    .then(data => {
      console.log("Raw data:", data);
      const agentData = findAgentByName(data.data, selectedAgent);
      if (agentData) {
        displayAgentData(agentData); // Display agent data on the webpage
      } else {
        throw new Error('Agent not found');
      }
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
});

function findAgentByName(agentList, agentName) {
  // Find the agent data by name in the agentList
  return agentList.find(agent => agent.displayName === agentName);
}

function displayAgentData(agent) {
  // Display the fetched agent data on the webpage
  const agentInfoContainer = document.getElementById("agentInfo");
  agentInfoContainer.innerHTML = `
    <h2>${agent.displayName}</h2>
    <p>Role: ${agent.role.displayName}</p>
    <p>Description: ${agent.description}</p>
    <img src="${agent.bustPortrait}">
    <p>C: ${agent.abilities[0].displayName}<p>
    <p>${agent.abilities[0].description}</p>
    <p>Q: ${agent.abilities[1].displayName}</p>
    <p>${agent.abilities[1].description}</p>
    <p>E: ${agent.abilities[2].displayName}</p>
    <p>${agent.abilities[2].displayName}</p>
    <p>Ultimate: ${agent.abilities[3].displayName}</p>
    <p>${agent.abilities[3].description}</p>
  `;
}
