# Contact App using Node Express JS

This is a beginner-friendly Node project focused on building a contact management application using Node.js with the Express.js framework. The project covers various topics such as APIs, server setup, routes and more.

## Getting Started

To run this project on your local machine, follow the instructions below:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository to your local machine using the following command:
```bash
# Example Bash Command
$ git clone https://github.com/your-username/contact-app.git
```
2.Navigate to the project directory

```bash
$ cd contact-app
```
3.Install project dependencies
```bash
$ npm install
```

#4.Create a .env file and define environment variables
```bash
$ touch .env
$ echo "PORT=3000" >> .env
$ echo "DB_URL=your-db-url" >> .env
```
Replace your-db-url with the URL for your database. If you don't have a database yet, you can set up a local development database or use a cloud-based solution like MongoDB Atlas.

Once the dependencies are installed and the environment variables are set, start the application by running the following command:

5.Start the application
```bash
$ npm start
```
Open your web browser and navigate to http://localhost:5000 (replace 5000 with the port number you specified in the .env file). You should now see the Contact App running locally on your machine.


# Usage
Use the Contact App to manage your contacts by adding, editing, and deleting contacts.
The application provides an API for performing CRUD (Create, Read, Update, Delete) operations on contacts. You can use tools like Postman or cURL to interact with the API endpoints.
I had used **Thunder** which is VSCode extension.
# Contributing
Contributions are welcome! If you have any suggestions or improvements for the project, feel free to submit a pull request.

# License
This project is licensed under the MIT License.






