import axios from "axios";



export default async function authorization() {
    try {
        const response = await axios.get( 'https://test.gnzs.ru/oauth/get-token.php', {
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