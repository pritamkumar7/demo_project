// const country = require('country-state-city').Country;
// const state = require('country-state-city').State;
// const city = require('country-state-city').City;
// const { Country } = require('country-state-city');
// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const mongoose = require('mongoose');
// const mongodb = require('mongodb').MongoClient;
// // console.log(state.getAllStates());
// // const countryes = country.getAllCountries();
// // countryes.forEach(countrys => {
// //     console.log(countrys.isoCode);
// // });
// MongoClient.connect('mongodb://localhost:27017', (err, db) => {
//     if (err) throw err;
//     var dbo = db.db('country_state_city');
//     var countryBulkData = dbo.collection('countries').initializeOrderedBulkOp();
//     var countries = country.getAllCountries();
//     countries.forEach(countryData => {
//         // console.log(countryData);
//         countryBulkData.insert({ name: countryData.name, short_name: countryData.isoCode })
//     });
//     countryBulkData.execute();
//     console.log('countries inserted');


//     var stateBulkData = dbo.collection('states').initializeOrderedBulkOp();
//     var states = state.getAllStates();
//     states.forEach(stateData => {
//         // console.log(stateData.countryCode);
//         stateBulkData.insert({ name: stateData.name, country_short_name: stateData.countryCode })
//     });
//     stateBulkData.execute();
//     console.log('state data inserted')


//     var cityBulkData = dbo.collection('citys').initializeOrderedBulkOp();
//     var citys = city.getAllCities();
//     citys.forEach(citysData => {
//         // console.log(countryData);
//         countryBulkData.insert({ name: citysData.name, state_name: citysData.stateCode })
//     });
//     cityBulkData.execute();
//     console.log('cityes Data is inserted');
// })










// // app.get('/country', async(req, res) => {
// //     const countryteData = country.getAllCountries();
// //     try {
// //         res.status(200).send(countryteData);
// //     } catch (error) {
// //         console.log('Error showing this ', error)
// //     }

// // });
// // app.get('/state', async(req, res) => {
// //     const stateData = state.getAllStates();

// //     try {
// //         res.status(200).send(stateData);
// //     } catch (error) {
// //         console.log('Error showing this ', error)
// //     }

// // });
// // app.get('/city', async(req, res) => {
// //     const cityData = city.getAllCities();

// //     try {
// //         res.status(200).send(cityData);
// //     } catch (error) {
// //         console.log('Error showing this ', error)
// //     }

// // });

// // const port = 5000;
// // app.listen(port, () => {
// //     console.log(` Server is connect is sucessfully ${port}`);
// // });