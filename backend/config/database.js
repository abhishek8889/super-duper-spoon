// const { MongoClient } = require('mongodb');

// const url = 'mongodb+srv://developerashar:4LjR#XSqS$Yd$4mX%J2W@cluster0.l8dpaxe.mongodb.net/';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'super-dooper-spoon';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://developerashar:4LjRXSqSYd4mXJ2W@cluster0.l8dpaxe.mongodb.net/')
  .then(() => console.log('Connected!'));