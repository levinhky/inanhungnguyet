import apiConfig from "@/config/apiConfig";
import Image from "next/image";
import { Link } from "@/navigation";
import { SetStateAction, useEffect, useState, Dispatch } from "react";

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setIsActiveSearchModal?: (isActiveSearchModal: boolean) => void;
};

export default function PopperWrapper({
  searchValue,
  setSearchValue,
  setIsActiveSearchModal,
}: Props) {
  const [searchData, setSearchData] = useState<[ProductAttributes]>();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const getSearchData = async () => {
      const res = await fetch(
        apiConfig.baseURL + "products?query=" + searchValue
      );
      const data = await res.json();

      if (data) {
        setSearchData(data.products);
        setIsShow(true);
      }
    };

    searchValue.length > 0 && getSearchData();
    searchValue.length == 0 && setIsShow(false);
  }, [searchValue]);

  return (
    <div className="rock:w-[700px] w-full bg-white rock:p-5 p-3 rock:rounded-lg rock:border-[var(--gray)] rock:border">
      <h1 className="font-bold mb-2 rock:text-sm test-base">
        {isShow ? "Sản Phẩm" : "Lịch Sử Tìm Kiếm"}
      </h1>

      {!isShow ? (
        <p className="text-sm">Lịch sử tìm kiếm rỗng</p>
      ) : (
        <div className="products">
          {searchData?.length ? (
            searchData?.map((product) => (
              <div key={product._id} className="flex items-center">
                <div className="thumb">
                  <Image
                    src={product.thumbs[0]}
                    className="h-[50px] rounded"
                    width={50}
                    height={50}
                    alt={product.name}
                  />
                </div>
                <Link
                  href={`/${product.slug}`}
                  className="name ml-3 rock:hover:text-[var(--blue)] rock:ease-in-out"
                  onClick={() => {
                    setSearchValue("");
                    setIsActiveSearchModal?.(false);
                  }}
                >
                  {product.name}
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm">Không kết quả</p>
          )}
        </div>
      )}
    </div>
  );
}
