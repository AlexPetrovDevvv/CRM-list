import axios from "axios";

const URL = 'https://test.gnzs.ru/oauth/get-token.php'


export default async function authorization() {
    try {
        const response = await axios.get( URL, {
            headers: {
                'Content-Type': 'application/json',
                "X-Client-Id": '31334466'
            }
        })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }