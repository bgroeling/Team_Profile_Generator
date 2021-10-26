// Function that generates markdown for html
function generateMarkdown(data) {
    return `
    # ${data.title}
    # ${data.about}
    # ${data.github}
    # ${data.installation}
    # ${data.information}
  
    ${renderLicenseBadge(data.license)}
  
    ${renderLicenseLink(data.license)}
  
    ${renderLicenseSection(data.license)}
    # ${data.confirmAbout}
    # ${data.guidlines}
    # ${data.instructions}
    # ${data.link}
  `;
}
  
module.exports = generateMarkdown;