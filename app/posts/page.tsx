'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamValue = searchParams.get('search') || ''; 

  const [searchValue, setSearchValue] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const [tempName, setTempName] = useState('');
  const [tempCategory, setTempCategory] = useState('');

  useEffect(() => {
    setSearchValue(searchParamValue);
  }, [searchParamValue]);

  const search = () => {
    const queryParams = new URLSearchParams({ search: searchValue });
    router.push(`/posts?${queryParams.toString()}`);
  };

  const searchNameAndCategory = () => {
    // Cập nhật searchName và searchCategory sau khi bấm nút Search
    setSearchName(tempName);
    setSearchCategory(tempCategory);

    const queryParams = new URLSearchParams({
      name: tempName,
      category: tempCategory
    });

    router.push(`/posts?${queryParams.toString()}`);
  };

  return (
    <>
      <b>Search Value: {searchValue}</b>
      <input 
        type="text" 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} 
        placeholder="Enter search term"
      />
      <button onClick={search}>Search</button>

      <b>Tên sản phẩm: {searchName}</b>
      <b>Tên danh mục: {searchCategory}</b>

      <input 
        type="text" 
        placeholder="Tìm kiếm theo tên" 
        value={tempName}
        onChange={(e) => setTempName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Tìm kiếm theo danh mục" 
        value={tempCategory}
        onChange={(e) => setTempCategory(e.target.value)} 
      />
      <button onClick={searchNameAndCategory}>Search by Name & Category</button>
    </>
  );
};

export default Page;
