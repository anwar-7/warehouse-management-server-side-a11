# Project Name:

## This is a Node.js server

This project was bootstrapped with [Express!](https://expressjs.com/en/starter/installing.html).

## Installing

This is the first step to make a node.js server with the help of express.

```bash
$ mkdir myapp
$ cd myapp
```

Now you have to initializing the npm

```bash
npm init -y
```

Here install `express`, middleware `cors`, database `mongodb`, security environmental variable `dotenv` (.env).

```bash
npm i express cors mongodb dotenv
```

### Hello world example

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## Nodemon

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g nodemon

# or using yarn: yarn global add nodemon
```

And nodemon will be installed globally to your system path.

### Add Scripts

Go to your `package.json` file and add some scripts

```json
"scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
}
```

In the project directory, you can run:

```bash
npm run start-dev
```

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**Note: !**

## Available Scripts

## Learn More

### How to use `dotenv`

Create a `.env` file in the root of your project:

```dosini
DB_USER="YOURS3BUCKET"
DB_PASSWORD="YOURSECRETKEYGOESHERE"
```

As early as possible in your application, import and configure dotenv:

```javascript
require('dotenv').config();

...

console.log(process.env); // remove this after you've confirmed it working
```

.. or using ES6?

```javascript
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
```

That's it. `process.env` now has the keys and values you defined in your `.env` file:

```javascript
require('dotenv').config()

...

s3.getBucketCors({Bucket: process.env.DB_USER}, function(err, data) {})

```
