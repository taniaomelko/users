import axios from 'axios';
export const URL = 'https://my-json-server.typicode.com/taniaomelko/users/users';

export const getData = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
