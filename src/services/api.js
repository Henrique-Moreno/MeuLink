// minha chave:  76423d521d2a8bcc865b1d5c3748b9804264235d  shorten

import axios from "axios";

export const key = "76423d521d2a8bcc865b1d5c3748b9804264235d"

const api = axios.create ({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

