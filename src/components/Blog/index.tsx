"use client";
import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";
import { homeService } from "@/api/home";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    homeService.articles()
    .then((api) => {
      let data = [];

      if (api.data) {
        api.data.map((article) => {
          data.push({
            id: article.id,
            title: article.titre,
            paragraph: article.contenu,
            image: article.photo,
            author: {
              name: "Cellune Numérique",
              image: article.photo,
              designation: "Comite de Gestion",
            },
            tags: [article.objet],
            publishDate: article.date_creation.split("T")[0],
          })
        })
        setArticles(data.slice(0, 3));
      }

    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  if (!articles.length)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-t-primary border-gray-200"></div>
      </div>
    );

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {articles && articles.map((blog, index) => (
            <div key={index} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-md font-semibold"
          >
            Voir toutes les Actualités
          </Link>
          <Link
            href="/calendrier"
            className="px-6 py-3 bg-primary text-white rounded-md font-semibold"
          >
            Voir le Calendrier Académique
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
