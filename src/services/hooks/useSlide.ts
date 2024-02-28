import { getSlideList } from "@/config/apiConfig";

const getList = async () => {
  const res = await getSlideList();
  return res.slides;
};

export { getList };
