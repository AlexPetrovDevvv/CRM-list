import axios from "axios";



export default async function authorization() {
    try {
        const response = await axios.get( 'https://test.gnzs.ru/')
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }