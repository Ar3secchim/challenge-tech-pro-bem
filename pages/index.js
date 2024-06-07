import { useEffect, useState } from "react";
import CardNotices from "./components/card";

export default function Home() {
  const [userState, setUserState] = useState({
    isLoading: true,
    articles: [],
    totalArticles: "0",
  });

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await fetch("/api/notices");
      const result = await response.json();

      setUserState((prevstage) => ({
        articles: result.articles,
        totalArticles: result.totalResults,
        isLoading: false,
      }));
    };

    fetchNotices();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Artigos em alta</h1>

      <div className="py-4">
        <span className="badge badge-ghost p-6">
          Total de artigos:
          <div className="badge badge-secondary ml-1">
            {userState.totalArticles}
          </div>
        </span>
      </div>

      <div className="flex flex-wrap gap-8 pt-6">
        {userState.isLoading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          userState.articles.map((article, index) => (
            <CardNotices key={index} article={article} />
          ))
        )}
      </div>
    </div>
  );
}
