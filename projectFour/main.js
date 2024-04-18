document.getElementById("searchForm").addEventListener("submit", function(event){
  event.preventDefault(); 
  
  const selectedAgent = document.getElementById("agent").value;

  const searchUrl = "https://valorant-api.com/v1/agents?name=" + encodeURIComponent(selectedAgent);

  console.log("Fetching data from:", searchUrl); 

  fetch(searchUrl)
    .then(response => {
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data =>{
      console.log("Raw data:", data);
      const agentData = findAgentByName(data.data, selectedAgent);
      if(agentData){
        displayAgentData(agentData);
      }else{
        throw new Error('Agent not found');
      }
    })
    .catch(error =>{
      console.error('There was a problem with your fetch operation:', error);
    });
});

function findAgentByName(agentList, agentName){
  return agentList.find(agent => agent.displayName === agentName);
}

function displayAgentData(agent){
  const agentInfoContainer = document.getElementById("agentInfo");
  agentInfoContainer.innerHTML = `
    <h2>${agent.displayName}</h2>
    <img src="${agent.bustPortrait}" class="agent-image">
    <p class="role">Role: ${agent.role.displayName}</p>
    <p class="description">Description: ${agent.description}</p>
    <p class="ability">C: ${agent.abilities[0].displayName}</p>
    <p class="ability-description">${agent.abilities[0].description}</p>
    <p class="ability">Q: ${agent.abilities[1].displayName}</p>
    <p class="ability-description">${agent.abilities[1].description}</p>
    <p class="ability">E: ${agent.abilities[2].displayName}</p>
    <p class="ability-description">${agent.abilities[2].description}</p>
    <p class="ability">Ultimate: ${agent.abilities[3].displayName}</p>
    <p class="ability-description">${agent.abilities[3].description}</p>
  `;
}

