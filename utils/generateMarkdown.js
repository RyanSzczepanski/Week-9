// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]${renderLicenseLink(license)}`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)]${renderLicenseLink(license)}`;
    case 'Apache 2.0':
      return `[![License: Apache](https://img.shields.io/badge/license-Apache%202.0-blue.svg)]${renderLicenseLink(license)}`
    case 'IBM Public':
      return `[![License: IPL 1.0](https://img.shields.io/badge/license-IPL%201.0-blue.svg)]${renderLicenseLink(license)}`
    default : 
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'Unlicense':
      return '(http://unlicense.org/)';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'IBM Public':
      return '(https://opensource.org/licenses/IPL-1.0)'
    default : 
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return renderLicenseBadge(license)
  }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#  ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}
`;
}

module.exports = generateMarkdown;
