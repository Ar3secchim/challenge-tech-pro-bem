import Link from "next/link";

export default function CardNotices({ article }) {
  return (
    <div className="card w-96 bg-base-300 shadow-2xl">
      <div className="card-body justify-between">
        <div className="badge badge-secondary">
          {formatDate(article.publishedAt)}
        </div>
        <h2 className="card-title">{formatTitle(article.title)}.</h2>

        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline">{article.author}</div>
          <Link className="link link-secondary p-2 " href={article.url}>
            Link da matéria
          </Link>
        </div>
        <Link className="btn" href={""}>
          Mais detalhes
        </Link>
      </div>
    </div>
  );
}

function formatDate(date) {
  const dateStr = new Date(date);

  const hora = dateStr.getHours().toString().padStart(2, "0");
  const minutos = dateStr.getMinutes().toString().padStart(2, "0");

  return `${dateStr.toLocaleDateString()} às ${hora}:${minutos}`;
}

function formatTitle(title) {
  const partes = title.split(" - ");
  return partes[0];
}
