import axios from 'axios';

const instance = axios.create({
    
    baseURL: 'https://us-central1-clone-d8c93.cloudfunctions.net/api' // this I grabbed from Firebase 
    // 'http://localhost:5001/clone-d8c93/us-central1/api' // The API (cloud function) URL
});

export default instance;