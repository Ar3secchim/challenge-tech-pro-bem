export default async function getPost(req, res) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=br`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    const data = await response.json();
    const result = {
      articles: data.articles,
      totalResults: data.totalResults,
    };
    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
  }
}
