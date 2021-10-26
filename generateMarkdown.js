// Function that generates markdown for html
function generateMarkdown(data) {
    return `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
    </head>

    <body>
    <header>My Team</header>
      <div>
          <h1> ${data.Name} </h1>
          <ul> 
            <h2> Manager </h2>
            ID: ${data.ID} <br>
            Email: <a href = "mailto: ${data.Email}"> ${data.Email}</a> <br>
            Office Number: ${data.OfficeNumber} <br>
          </ul>
      </div>

      <div>

      </div>

    </body>
    </html>
  `;
}
  
module.exports = generateMarkdown;