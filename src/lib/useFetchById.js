import axios from "axios";
import { useState } from "react";

export const useFetchById = () => {
  const [isLoading, isLoadingSet] = useState(false);
  const [dataById, dataByIdSet] = useState([]);

  async function fetcherById(url) {
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

      dataByIdSet(dataRes);
      isLoadingSet(false);
      
    } catch (error) {
      console.log(error)
      isLoadingSet(false);
    }
  }

  return {fetcherById, isLoading, dataById};
};