function generateReadMe(data) {
  return `
      # ${data.project} 

     
  
      - LinkedIn Link ${data.linkedin}
      
      - Weather Dashboard is an application to find weather conditions of given city and 5 day forecast.
      - Used server side API to retrieve the weather data
      
      ## Table of Contents
      
      - [Description](#Description)
      - [Installation](#Installation)
      - [Links](#Links)
      - [Resources](#Resources)
      - [Issues](#Issues)
      - [license](#License)
      
      
      ## Description
      ${data.description}
      
      
      ## Deployed Link
      - Link to deployed website: ${data.deployed}
  
      ## License
      -This Application is Licensed By ${data.license}
     
  
      ## Resources
      ${data.resources}
      
      ## Issues
      If you see any issues please contact me! Here is my Email [Email](${data.email})
      Here is my GitHub Repository ! [Github](https://.com/${data.github})
      
      `;
}
module.exports = generateReadMe;