import database from '../database.js';
import express, { request, response } from 'express';

const routeGet = express.Router();


routeGet.get('/clothes', (request, response) => {
    const query = `
        SELECT
            Clothes.ProductID,
            Clothes.Image,
            Clothes.Title,
            Categories.CategoryName,
            Clothes.Price,
            Clothes.Description,
            Sizes.SizeName,
            State.StateName
        FROM Clothes
        JOIN Categories ON Clothes.CategoryID = Categories.CategoryID
        JOIN Sizes ON Clothes.SizeID = Sizes.SizesID
        JOIN State ON Clothes.StateID = State.StateID;
    `;

    database.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({ message: error });
        } else {
            response.json(results);
        }
    });
});


routeGet.get('/mensClothes', (request, response) => {
    const query = `
        SELECT
            Clothes.ProductID,
            Clothes.Image,
            Clothes.Title,
            Categories.CategoryName,
            Clothes.Price,
            Clothes.Description,
            Sizes.SizeName,
            State.StateName
        FROM Clothes
        JOIN Categories ON Clothes.CategoryID = Categories.CategoryID
        JOIN Sizes ON Clothes.SizeID = Sizes.SizesID
        JOIN State ON Clothes.StateID = State.StateID
        WHERE Categories.CategoryID = 1;
    `;

    database.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({ message: error });
        } else {
            response.json(results);
        }
    });
});

routeGet.get('/womensClothes', (request, response) => {
    const query = `
        SELECT
            Clothes.ProductID,
            Clothes.Image,
            Clothes.Title,
            Categories.CategoryName,
            Clothes.Price,
            Clothes.Description,
            Sizes.SizeName,
            State.StateName
        FROM Clothes
        JOIN Categories ON Clothes.CategoryID = Categories.CategoryID
        JOIN Sizes ON Clothes.SizeID = Sizes.SizesID
        JOIN State ON Clothes.StateID = State.StateID
        WHERE Categories.CategoryID = 2;
    `;

    database.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({ message: error });
        } else {
            response.json(results);
        }
    });
});

export default routeGet;

