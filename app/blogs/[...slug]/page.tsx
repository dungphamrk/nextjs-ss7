"use client";
import { useEffect, useState } from "react";
import { data } from "../page";

interface Post {
  id: string;
  title: string;
  image: string;
  slug: string;
}

interface Url {
  slug: string;
}

interface Props {
  params: Url;
}

export default function BlogDetail(props: Props) {
  const [blog, setBlog] = useState<Post | undefined>(undefined);
  const { params } = props;
  console.log(params.slug[0]);

  useEffect(() => {
    const foundBlog = data.find((item) => item.slug === params.slug[0]);
    setBlog(foundBlog);
  }, [params]);

  return (
    <>
      <div
        key={blog?.id}
        className="w-[300px] border border-gray-300 p-4 text-center rounded-md shadow-md"
      >
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-24 object-cover mb-2"
        />
        <h3 className="text-lg font-semibold mb-2">{blog?.title}</h3>
      </div>
    </>
  );
}
