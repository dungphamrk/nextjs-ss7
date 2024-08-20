import Button from "@/components/Button";
import Page from "@/pages/Page";
import Helpers from "@/utils/Helpers";
import React from "react";
import ListPost from "./listPost/page";

export default function page() {
  return (
    <div className="ml-[250px] mt-[50px]">
      <h1>Bài 5</h1>
      <Button />
      <Page />
      <Helpers />
      <br />
      <h1>Bài 6</h1>
      <h1>SỬ DỤNG ROUTER GROUP</h1>
      <br />
      <h1>Bài 7</h1>
      <h1>Tạo nhiều Router Group</h1>
      <br />
      <h1>Bài 8</h1>
      <h1>
        Tạo một trang với Catch-all Routes để xử lý tất cả các đường dẫn bắt đầu
        bằng /blog/.
      </h1>
      <br />
      <h1>Bài 9 + 10</h1>
      <ListPost />
      <br /> <br /> <br />
    </div>
  );
}
