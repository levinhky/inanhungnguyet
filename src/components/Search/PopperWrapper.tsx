import apiConfig from "@/config/apiConfig";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState, Dispatch, useCallback } from "react";
import Product from "./Product";

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setIsActiveSearchModal?: (isActiveSearchModal: boolean) => void;
  searchHistoryTitle: string;
  searchHistoryEmpty: string;
  products: string;
  noResult: string;
};

export default function PopperWrapper({
  searchValue,
  setSearchValue,
  setIsActiveSearchModal,
  searchHistoryTitle,
  searchHistoryEmpty,
  products,
  noResult,
}: Props) {
  const [searchData, setSearchData] = useState<[ProductAttributes]>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.trim() !== "") {
        setIsLoading(true);
        setIsShow(false);
        try {
          const response = await fetch(apiConfig.baseURL + "products?query=" + searchValue);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSearchData(data.products);
          setIsShow(true);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [searchValue]);

  const handleClickProductSearch = useCallback(() => {
    setSearchValue("");
    setIsActiveSearchModal?.(false);
  }, []);

  return (
    <div className="rock:w-[700px] w-full bg-white rock:p-5 p-3 rock:rounded-lg rock:border-[var(--gray)] rock:border">
      <h4 className="font-bold mb-2 rock:text-sm test-base">{isShow ? products : searchHistoryTitle}</h4>

      {!isShow ? (
        <p className="text-sm">{searchHistoryEmpty}</p>
      ) : (
        <div className="products">
          {isLoading ? (
            "Loading..."
          ) : searchData?.length ? (
            searchData.map((product) => (
              <Product key={product._id} product={product} handleClickProductSearch={handleClickProductSearch} />
            ))
          ) : (
            <p className="text-sm">{noResult}</p>
          )}
        </div>
      )}
    </div>
  );
}
