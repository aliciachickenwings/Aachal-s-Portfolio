const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs/promises');
const { MongoClient, ObjectId } = require('mongodb');
const {
    v4: uuidv4
} = require('uuid');
const path = require('path');

require('dotenv').config();
//make files public
app.use(express.static('public'));
//create mongo client
const client = new MongoClient(process.env.URL);

app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.json());

app.listen(3000);
console.log("app running at http://localhost:3000");


app.get('/', (req, res) => {
    res.send('gott it');
});

//get all works
app.get('/works', async (req, res) => {
    try {

        await client.connect();
        const coll = client.db('Aachal_Portfolio').collection('Works');

        //get all works
        const allWorks = await coll.find({}).toArray();
        console.log(allWorks);
        res.status(200).send({
            status: 'OK request',
            message: 'got all markers',
            data: allWorks
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: 'something went wrong',
            value: err
        });
    } finally {
        await client.close();
    }
});

//Get work by ID
app.get('/works/:id', async (req, res) => {
    try {
      const workId = new ObjectId(req.params.id);
      const work = await client.db('Aachal_Portfolio').collection('Works').aggregate([
        { $match: { _id: workId } },
        {
          $lookup: {
            from: 'Tags', // Name of the collection to join
            localField: 'tags', // Field from the 'Works' collection
            foreignField: '_id', // Field from the 'Tags' collection
            as: 'tagDetails' // Alias for the joined tags
          }
        }
      ]).toArray();
  
      if (work.length > 0) {
        res.json(work[0]);
      } else {
        res.status(404).send('Work not found');
      }
    } catch (err) {
      res.status(500).send('Error fetching work: ' + err);
    }
  });