export default async function handler(req, res) {
  const { word } = req.query;
  
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${word}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = await response.json();
    res.status(200).json({ article: data.articles });
  } catch (error) {
    return res.status(500).json({ articles: [] });
  }
}
