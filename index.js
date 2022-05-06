const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  ChangeStream,
} = require('mongodb');

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.taawa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const productCollection = client.db('gTech').collection('product');

    // all products
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    app.get('/products/:id', async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: ObjectId(id) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    // update product
    app.put('/products/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const updatedProduct = req.body;
      console.log(updatedProduct);
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          quantity: updatedProduct.quantity,
        },
      };
      const result = await productCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
  } finally {
    // if you want to close database
    // client.close()
  }
}
run().catch(console.dir);
// for server testing purpose
app.get('/', (req, res) => {
  res.send('Gtech Server is Running');
});

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});
