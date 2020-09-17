import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e79s3GBFryMqW6-_prKVCwXfTSBC8hoyL3LSa4YphfI'
  }
});