import { getCategories } from "@/config/apiConfig";
import { useEffect, useState } from "react";

const useCategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategories();
        setData(response.categories);
      } catch (error) {
        console.log("error when fetching category list", error);
      }
    };

    getData();
  }, []);

  return data;
};

export default useCategoryList;
