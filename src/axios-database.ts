import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
});
export default instance;