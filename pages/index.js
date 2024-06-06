import { useEffect, useState } from "react";
import CardNotices from "./components/card";

export default function Home() {
  const [userState, setUserState] = useState({
    articles: [],
    totalArticles: "",
  });

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await fetch("/api/notices");
      const result = await response.json();
      setUserState((prevState) => ({
        articles: result.articles,
        totalArticles: result.totalResults,
      }));
    };

    fetchNotices();
  }, []);

  return (
    <div className="container ">
      <h1 className="text-3xl">Artigos em alta</h1>
      {userState.articles.map((article, index) => (
        <CardNotices key={index} article={article} />
      ))}
    </div>
  );
}
