const { writeFile } = require("fs");

// Function that generates markdown for html
function generateMarkdown(data) {
  return `
     <h1> Manager </h1>
      <ul> 
        <h2> ${data.Name} </h2>
        ID: ${data.ID} <br>
        Email: <a href = "mailto: ${data.Email}"> ${data.Email}</a> <br>
        Office Number: ${data.OfficeNumber} <br>
      </ul>
  `;
}

function generateMarkdown2(data) {
  return `
  
  `;
}

function generateMarkdown3(data) {
  return `
  
  `;
}
  
module.exports = generateMarkdown, generateMarkdown2,generateMarkdown3;