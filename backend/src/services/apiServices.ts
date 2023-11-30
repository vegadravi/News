const axios = require('axios');
const mediaStackAPIUrl = 'http://api.mediastack.com/v1/news';
const apiKey = '4876c8da8d1a74d206c16e85ede221cc'; 
async function getHomeData(req:any, res:any) {
    try {
      const response = await axios.get(mediaStackAPIUrl, {
        params: {
          access_key: apiKey,
          keywords: req.query.keywords,
        },
      });
      console.log('R4x response',response);
      console.log('R4x response',response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  
  module.exports = {
    getHomeData,
  };

  //get live api data search home
// app.get('/api/home', async (req:any, res:any) => {
//     try {
//       const response = await axios.get(mediaStackAPIUrl, {
//         params: {
//           access_key: apiKey,
//           keywords: req.query.keywords
//         },
//       });
//       res.json(response.data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
