const Manager=require("./lib/Manager");
const Engineer=require("./lib/Engineer");
const Intern=require("./lib/Intern");
const inquirer=require("inquirer");
const path=require("path");
const fs=require("fs");

const OUTPUT_DIR=path.resolve(__dirname,"output");
const outputPath=path.join(OUTPUT_DIR,"team.html");

const render=require("./lib/htmlRenderer");
const teamMembers = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function newEmp() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What role is this for?",
                name: "role",
                choices: ['Intern','Manager','Employee']
            },
            {
                type: "input",
                message: "What's the employee's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What's the ID for the employee?",
                name: "id"
            },
            {
                type: "input",
                message: "What's the email for the employee?",
                name: "email"
            },
            {
                type: "input",
                message: "What's the Office Number for the employee?",
                name: "officeNumber"
            },
            // {
            //     type: "input",
            //     message: "What's the Github username for the employee?",
            //     name: "github"
            // },
            // {
            //     type: "input",
            //     message: "What's school does the employee attend?",
            //     name: "school"
            // },
        ])

        .then(response => {

            const manager1 = new Manager(response.name,response.id,response.email,response.officeNumber);
            teamMembers.push(manager1);
            console.log(teamMembers);

            buildTeam();
        })
            
            const buildTeam = () => {
                let renderTeam = render(teamMembers);
                fs.writeFileSync(outputPath, renderTeam, "utf-8")
            }
    }


 newEmp();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```