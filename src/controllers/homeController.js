import { connection } from '../configs/database.js'; // ✅ Sửa lại đường dẫn

const getHomePage = (req, res) => {
  async function testConnection() {
    try {
      const [results] = await connection.query('SELECT * FROM Users;');
      console.log('Check result:', results);
      res.send(JSON.stringify(results));
    } catch (err) {
      console.error('MySQL Error:', err);
    }
  }

  testConnection();
  
};

const getABC = (req, res) => {
  res.send('Hello ABC!');
};

const getSample = (req, res) => {
  res.render('sample.ejs');
};

export { getHomePage, getABC, getSample };
