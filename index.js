const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./assets/utils/generate.js");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "project",
    },
    {
      type: "input",
      message: "Description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions",
      name: "instructions",
    },
    {
      type: "input",
      message: "Deployed Github Application Link",
      name: "deployed",
    },
    {
      type: "input",
      message: "What is your LinkedIn Username?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "Any Resources?",
      name: "resources",
    },
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your Email address?",
      name: "email",
    },
    {
      type: "list",
      message: "license for the app (if any)?",
      name: "license",
      choices: ["MIT", "CC0", "BSD", "Apache"],
    },
  ])

  .then((data) =>
    fs.writeFile("./README.md", generateReadMe(data), function (error) {
      if (error) return console.log(error);
    })
  );
