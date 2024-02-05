const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export async function getProducts(
  sort: string = "name=-asc",
  page: number | undefined,
  limit: number | undefined
) {
  const res = await fetch(
    `${apiConfig.baseURL}products/all?page=${page}&limit=${limit}&sort=${sort}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getProductsSearch(
  query: string | undefined,
  sort: string = "name=-asc",
  page: number | undefined,
  limit: number | undefined
) {
  const res = await fetch(
    `${apiConfig.baseURL}products?query=${query}&page=${page}&limit=${limit}&sort=${sort}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getCategories() {
  const res = await fetch(apiConfig.baseURL + "categories/all", {
    cache: "no-store",
  });
  return res.json();
}

export async function getCategory(
  slug: string,
  sort: string = "name=-asc",
  page: number | undefined,
  limit: number | undefined
) {
  const res = await fetch(
    `${apiConfig.baseURL}categories/${slug}?page=${page}&limit=${limit}&sort=${sort}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getProduct(slug: string) {
  const res = await fetch(apiConfig.baseURL + "products/" + slug, {
    cache: "no-store",
  });

  return res.json();
}

export default apiConfig;
