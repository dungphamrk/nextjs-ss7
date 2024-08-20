import Link from "next/link";
import React from "react";

interface Post {
  id: string;
  title: string;
  image: string;
  slug: string;
}

export const data: Post[] = [
  {
    id: "1",
    title: "1111",
    image:
      "https://topdev.vn/blog/wp-content/uploads/2023/12/nen-hoc-c-hay-c-plus-4.jpg",
    slug: "lap-trinh-co-ban-c",
  },
  {
    id: "2",
    title: "22222",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.gGqot8ixN24z5agLwEkNygHaEr&pid=Api&P=0&h=180",
    slug: "lap-trinh-java-core",
  },
  {
    id: "3",
    title: "3333",
    image:
      "https://funix.edu.vn/wp-content/uploads/2024/02/lap-trinh-php-bang-gi-1.jpg",
    slug: "lap-trinh-php",
  },
  {
    id: "4",
    title: "444444",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.ivjksIhvAs7TUXbQCxAU0AHaEK&pid=Api&P=0&h=180",
    slug: "lap-trinh-reactjs",
  },
];

export default function ListPost() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <div className="flex gap-4">
        {data.map((data) => (
          <div
            key={data.id}
            className="border border-gray-300 p-4 text-center rounded-md shadow-md"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
            <Link href={`/listPost/${data.slug}`}>
              <div className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Xem chi tiết
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
