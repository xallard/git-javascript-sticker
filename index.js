const inquirer = require("inquirer");
const chalk = require("chalk");
const NodeRSA = require("node-rsa");
const fs = require("fs");

(async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your full name",
    },
    {
      type: "input",
      name: "street",
      message: "Street address",
    },
    {
      type: "input",
      name: "street2",
      message: "Suite or Apt # (optional)",
    },
    {
      type: "input",
      name: "city",
      message: "City",
    },
    {
      type: "input",
      name: "state",
      message: "State/Region",
    },
    {
      type: "input",
      name: "zip",
      message: "Postal Code",
    },
    {
      type: "input",
      name: "country",
      message: "Country",
    },
    {
      type: "input",
      name: "notes",
      message: "Any special notes?",
    },
  ]);

  const keyData = fs.readFileSync("public.key", "utf8");

  const key = NodeRSA();
  key.importKey(keyData);

  const encrypted = key.encrypt(answers, "base64");

  console.log(chalk.yellow("------ copy below ------"));
  console.log(chalk.green(encrypted));
  console.log(chalk.yellow("------ copy above ------"));

  console.log(`
    ${chalk.blueBright(
      "Step 1:"
    )} Copy the green encrypted text above - it's your encrypted mailing address.
    ${chalk.blueBright("Step 2:")} Create a new file in ${chalk.bgBlue(
    "stickers/<your-github-username>.txt"
  )}. Paste in the green text. 
    ${chalk.blueBright("Step 3:")} Submit a pull request on Github. 
    ${chalk.blueBright("Step 4:")} Check your mailbox in a few weeks!
    ${chalk.bgKeyword("orange")(
      chalk.black(" Pull Request Requirements ")
    )} Your pull request should only contain 1 new file! Which is the stickers/<your-github-username>.txt file.
  `);
})();
