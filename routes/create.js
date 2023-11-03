import express from 'express';
import database from '../database.js';

const routePost = express.Router();

routePost.post('/clothes', (request, response) => {

    const { Image, Title, CategoryID, Price, Description, SizeID, StateID } = request.body;

    const query = 'INSERT INTO Clothes (Image, Title, CategoryID, Price, Description, SizeID, StateID) VALUES (?, ?, ?, ?, ?, ?, ?)';

    const values = [Image, Title, CategoryID, Price, Description, SizeID, StateID];

    console.log(values);

    database.query(query, values, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            response.json(result);
        }
    });

});

export default routePost;