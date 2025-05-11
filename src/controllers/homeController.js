import { connection } from '../configs/database.js'; // ✅ Sửa lại đường dẫn
import {
  getAllUser,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from '../services/crud.service.js';
const getHomePage = (req, res) => {
 return res.render('homepage.ejs', {
   title: 'Home Page',
   message: 'Welcome to the Home Page!',
 });
  
};

const getABC = (req, res) => {
  res.send('Hello ABC!');
};

const getSample = (req, res) => {
  res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
  const { name, email, city } = req.body;
  try {
    const result = await createUser(name, email, city);
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    console.log('User created:', result);
    return res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

const getUser = async (req, res) => {
  try {
    let result = await getAllUser();
   return res.render('listUsers.ejs', { users: result }); // Pass users to the view
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
};

const getCreateUser = (req, res) => {
  res.render('create.ejs');
};

const getViewUser = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await getUserById(id);
    if (result) {
      return res.render('viewUser.ejs', { user: result });
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, city } = req.body;

  try {
    const result = await updateUserById(id, name, email, city);
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    return res.redirect('/users');
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).send('Error updating user');
  }
};
const getEditUser = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await getUserById(id);
    if (result) {
      return res.render('editUser.ejs', { user: result });
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).send('Error fetching user');
  }
};

const getDeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteUserById(id);
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    return res.redirect('/users');
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).send('Error fetching user');
  }
};
export { getHomePage, getABC, getSample, postCreateUser, getEditUser, getUser, getCreateUser, getViewUser, updateUser, getDeleteUser };
