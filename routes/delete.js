import database from '../database.js';
import express from 'express';

const routerDelete = express.Router();

routerDelete.delete('/clothes/:productID', (request, response) => {
    const Id = request.params.productID;
    const query = 'DELETE FROM clothes where productID = ?';

    database.query(query, [Id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

export default routerDelete;