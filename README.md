# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a MySQL-based CLI database management tool. It allows users to manage a SQL database with their employees, departments, salaries, managers, and job roles.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Technologies Used](#Technologies-Used)
- [Questions](#Questions)
- [Credits](#Credits)

## Installation

To get started with Employee Tracker, you must have MySQL set up on your local machine. Fork or clone this repository to your local machine and open in your IDE of choice. First, you need to set up the ```connection.js``` file in the ```config``` folder. There is an example provided in the folder for you refer to. Head to the command line and run ```mysql -u yourUsernameHere -p```. Enter your password when prompted, then run ```SOURCE db/schema.sql``` then ```SOURCE db/seeds.sql``` to get the database set up and seeded.

## Usage

To see this app in action, check out the [Walkthrough Video!](https://drive.google.com/file/d/11-9osyjl51HVTF8k2GdeuLcU4JBYtKzh/view)

<img width="673" alt="Screenshot 2024-01-19 at 12 23 54 PM" src="https://github.com/tavargas9/employee-tracker/assets/142061829/2c22948a-4371-4a1c-8a76-3903e931ab6e">

To use this application, head to the command line an run ```npm start```. Through the terminal, you will now be able to View Employees, Departments, and Roles, and add/update each as needed. Follow the prompts!

## License 

This project is available under the MIT license. See [LICENSE](./LICENSE) for more info.

## Contributing

This project is open to contribution! To make any contributions, go ahead and fork the repo and create a new branch. Open a GitHub issue describing all updates/changes that you plan to make. When ready, push the changes to your branch and sumbit a pull request and wait for approval before merging.

## Technologies Used

JavaScript, Node.js, MySql, Inquirer

## Questions

If there are any questions, feel free to reachout to me on [GitHub](https://github.com/tavargas9), or send me an [email](mailto:tavargas9@gmail.com).

## Credits

This README was generated using [README Generator](https://github.com/tavargas9/README-generator) created by [Tomas Vargas](https://github.com/tavargas9).
