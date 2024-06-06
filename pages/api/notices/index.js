export default async function getPost(req, res) {
  try {
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?country=br`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const data = await result.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    res.status(500).json({ error: "Erro ao buscar dados." });
  }
}
