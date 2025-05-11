import { connection } from '../configs/database.js';

// Fetch all users
const getAllUser = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM Users;');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fetch a single user by ID
const getUserById = async (id) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

// Create a new user
const createUser = async (name, email, city) => {
  try {
    const [result] = await connection.execute(
      'INSERT INTO Users (name, email, city) VALUES (?, ?, ?)',
      [name, email, city]
    );
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Update a user
const updateUserById = async (id, name, email, city) => {
  try {
    const [result] = await connection.execute(
      'UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?',
      [name, email, city, id]
    );
    return result;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user
const deleteUserById = async (id) => {
  try {
    const [result] = await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
    return result;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export { getAllUser, getUserById, createUser, updateUserById, deleteUserById };