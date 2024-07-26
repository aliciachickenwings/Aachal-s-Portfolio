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

  //POST a work
  app.post('/work', async (req, res) => {
    try {
      const { name, description, year, tags, link } = req.body;
  
      // Validate that all fields are present
      if (!name || !description || !year || !tags || !link) {
        return res.status(400).send('All fields are required.');
      }
  
      // Convert tags to ObjectId and validate them
      const tagIds = tags.map(tag => new ObjectId(tag));
      const existingTags = await client.db('Aachal_Portfolio').collection('Tags').find({ _id: { $in: tagIds } }).toArray();
  
      if (existingTags.length !== tags.length) {
        return res.status(400).send('One or more tags are invalid.');
      }
  
      // Create the new work document
      const newWork = {
        name,
        description,
        year,
        tags: tagIds, // Store the ObjectId references
        link
      };
  
      // Insert the new work into the database
      const result = await client.db('Aachal_Portfolio').collection('Works').insertOne(newWork);
  
      res.status(201).send(`Work created with ID: ${result.insertedId}`);
    } catch (err) {
      res.status(500).send('Error creating work: ' + err);
    }
  });

  //DELETE a work

  // DELETE a work by ID
app.delete('/work/:id', async (req, res) => {
  try {
    const workId = new ObjectId(req.params.id);

    // Delete the work from the database
    const result = await client.db('Aachal_Portfolio').collection('Works').deleteOne({ _id: workId });

    // Check if a document was deleted
    if (result.deletedCount === 1) {
      res.status(200).send(`Work with ID ${workId} deleted successfully.`);
    } else {
      res.status(404).send('Work not found.');
    }
  } catch (err) {
    res.status(500).send('Error deleting work: ' + err);
  }
});

  //POST a tag
  app.post('/tag', async (req, res) => {
    try {
      const { name } = req.body;
  
      // Validate that the name field is present
      if (!name) {
        return res.status(400).send('Name field is required.');
      }
  
      // Create the new tag document
      const newTag = { name };
  
      // Insert the new tag into the database
      const result = await client.db('Aachal_Portfolio').collection('Tags').insertOne(newTag);
  
      res.status(201).send(`Tag created with ID: ${result.insertedId}`);
    } catch (err) {
      res.status(500).send('Error creating tag: ' + err);
    }
  });