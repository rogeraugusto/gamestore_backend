<h1 align="center">
Gamestore API
</h1>

<p align="center">An a exemple of a REST API in Node.js and MongoDB, using Express and Mongoose.</p>

<hr>

## Dependencies

- [Node.js](https://nodejs.org/en/) >= v10.16.1
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) >= v4.0.10

## Getting started

1. Clone this repository<br />
2. Move to the appropriate directory<br />
3. Run `yarn` to install dependencies<br />
4. Run `mongod` to start MongoDB<br />
5. Run `yarn start`

## Testing

- Import the Insomnia's Workspace requests file called `Insomnia_Requests.json` found on this project root folder

## Features

- MVC Pattern

## - Object schema validation with **Joi**

- Paginated response with **mongoose-paginate**

## - Some _filters_ and _validations_ implemented on _Product_, _History_ and _Cart_ controllers

## - Auth middleware with **JWT authentication** to _users_ and _sessions_ routes (but commented, not requested on this challenge)
