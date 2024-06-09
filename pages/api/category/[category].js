export default async function getCategory(req, res) {
  const { category } = req.query; 
 
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=br&category=${category}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    const data = await response.json();

    res.status(200).json({ article: data.articles, totalArticles: data.totalResults });
  } catch (error) {
    return res.status(500).json({ articles: [] });
  }
}
