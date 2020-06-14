import axios from 'axios';

class Api {
    static async getUSerInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        } catch (e) {
            console.log('erro na api')
        }
    }
}

Api.getUSerInfo('jader-germano')
Api.getUSerInfo('jadersgermano')