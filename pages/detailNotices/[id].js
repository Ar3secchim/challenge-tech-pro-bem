/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NoticiesDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  console.log(article);
  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const response = await fetch(`/api/notices/${id}`);
        const data = await response.json();
        setArticle(data.article);
      };
      fetchArticle();
    }
  }, [id]);

  if (!article)
    return (
      <div className="hero min-h-96">
        <div className="hero-content text-center">
          <h1 className="text-5xl font-bold"> 😭 Ops! Artigo não encontrado</h1>
        </div>
      </div>
    );

  return (
    <div className="container mt-4">
      <h1 className="font-bold text-3xl">{article.title}</h1>
      <div className="divider"></div>
      <div className=" flex flex-col gap-2 mb-2">
        <p className="badge badge-secondary p-4">
          Publicado em: {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        {article.author && (
          <p className="badge badge-outline p-4">Autor: {article.author}</p>
        )}
      </div>
      <div class="flex flex-col w-full lg:flex-row my-5">
        <div class="place-items-center">
          <img src={article.urlToImage} alt="foto da noticia" width={2000} />
        </div>

        <div class="divider lg:divider-horizontal"></div>

        <div class=" card bg-base-300 rounded-box p-4 place-items-center">
          <p className="text-xl mt-5 mb-4">{article.description}.</p>
          <p className="text-xl mb-5">{article.content}</p>

          <Link className="btn btn-secondary" href={article.url}>
            Link da matéria
          </Link>
        </div>
      </div>
    </div>
  );
}
