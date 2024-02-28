import { getCategories } from "@/config/apiConfig";

const useCategoryList = async () => {
  const response = await getCategories();
  return response.categories;
};

export default useCategoryList;
