import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
  const [isLoading, isLoadingSet] = useState(false);
  const [data, dataSet] = useState([]);

  async function fetcher(url) {
    try {
      isLoadingSet(true);

      const {data: dataRes} = await axios({
        method:"get",
        baseURL: import.meta.env.VITE_ENDPOINT,
        url: url,
        headers: {
          "Content-Type": "application/json"
        }
      })

      dataSet(dataRes);
      isLoadingSet(false);
      
    } catch (error) {
      console.log(error)
      isLoadingSet(false);
    }
  }

  return {fetcher, isLoading, data};
};