import axios from "axios";

const fetcher = (url, config) => axios(url, config);

export default fetcher;