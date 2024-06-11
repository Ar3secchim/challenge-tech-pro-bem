/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import CardNotices from "../components/card";

export default function NoticiesDetail() {
  const router = useRouter();
  const { category } = router.query;

  const [componentsState, setUseState] = useState({
    articles: [],
    totalArticles: 0,
    isLoading: true,
  });

  useEffect(() => {
    if (category) {
      const fetchArticle = async () => {
        const response = await fetch(`/api/category/${category}`);
        const data = await response.json();

        setUseState((prevstage) => ({
          articles: data.article,
          totalArticles: data.totalArticles,
          isLoading: false,
        }));
      };
      fetchArticle();
    }
  }, [category]);

  if (componentsState.isLoading)
    return <span className="loading loading-dots loading-lg"></span>;

  const categoryName = () => {
    let name;

    switch (category) {
      case "technology":
        name = "Tecnologia";
        break;
      case "business":
        name = "Negócios";
        break;
      case "sports":
        name = "Esporte";
        break;
      case "science":
        name = "Ciências";
        break;
      case "entertainment":
        name = "Entretendimento";
        break;
      case "health":
        name = "Saúde";
        break;
      default:
        break;
    }

    return name;
  };

  return (
    <>
      <h1 className="text-3xl">Artigos da categoria {categoryName()}</h1>
      <div className="py-4">
        <span className="badge badge-ghost p-6">
          Total de artigos:
          <div className="badge badge-secondary ml-1">
            {componentsState.totalArticles}
          </div>
        </span>
      </div>
      <div className="flex flex-wrap gap-8 pt-6">
        {componentsState.articles.map((article, index) => {
          return <CardNotices key={index} article={article} />;
        })}
      </div>
    </>
  );
}
