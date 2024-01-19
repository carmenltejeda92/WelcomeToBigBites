// const City = require('../../models/city');

// exports.searchCity = async (req, res) => {
//     const { name } = req.query;
  
//     try {
//       const cities = await City.find({ name: new RegExp(name, 'i') }); // Case-insensitive search
//       res.json(cities);
//     } catch (error) {
//       console.error('Error finding cities:', error);
//       res.status(500).json({ error: 'hi its me im the problem its me' });
//     }
//   };

// exports.saveCity = async (req, res) => {
//   const { name, country, population, is_capital } = req.body;

//   try {
//     const newCity = new City({
//       name,
//       country,
//       population,
//       is_capital,
//     });

//     await newCity.save();
//     console.log("city save")
//     res.json({ message: 'city saved' });
//   } catch (error) {
//     console.error('Error saving city:', error);
//   }
// };

