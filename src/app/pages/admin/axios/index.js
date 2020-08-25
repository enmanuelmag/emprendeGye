const Axios = require('axios');

export default async function getGanancias() {
    try {
      const response = await Axios(
        { method: 'GET',
        url: 'http://emprendegye-5fea.restdb.io/rest/ganancias-2',
        headers: 
         { 'cache-control': 'no-cache',
           'x-apikey': 'a3d2ab335f073808d0a9aa568c3f6460c012d',
         } })
           console.log(response.data);
           return response.data
      
    } catch (error) {
      console.error(error);
    }
  }
//getGanancias();