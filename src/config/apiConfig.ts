const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export async function getProducts(
  page?: number | undefined,
  limit?: number | undefined,
  sort?: string | undefined
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
  query: string,
  page: number | undefined,
  limit: number | undefined,
  sort: string | undefined
) {
  const res = await fetch(
    `${apiConfig.baseURL}products?query=${query}&page=${page}&limit=${limit}&sort=${sort}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getCategories(
  page?: number | undefined,
  limit?: number | undefined
) {
  const res = await fetch(
    `${apiConfig.baseURL}categories/all?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getCategory(
  slug: string,
  page?: number | undefined,
  limit?: number | undefined,
  sort?: string | undefined
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

export async function getSlideList() {
  const res = await fetch(apiConfig.baseURL + "slides/all", {
    cache: "no-store",
  });

  return res.json();
}

export default apiConfig;
