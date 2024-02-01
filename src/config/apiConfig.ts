const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export async function getProducts(sort?: "name-asc", limit?: 8, page?: 1) {
  const res = await fetch(`${apiConfig.baseURL}products/all?page=${page}&limit=${limit}&sort=${sort}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getCategories() {
  const res = await fetch(apiConfig.baseURL + "categories/all", { cache: "no-store" });
  return res.json();
}

export default apiConfig;
