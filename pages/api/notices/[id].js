import encodeURI from "@/utils/encodeURI";
export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = await response.json();
    res.status(200).json({ article: data.articles[0] });
  } catch (error) {
    return res.status(500).json({ articles: [] });
  }
}
