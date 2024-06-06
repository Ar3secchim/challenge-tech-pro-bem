export default function CardNotices({ article }) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          {article.description}
          <div class="badge badge-secondary">{article.category}</div>
        </h2>

        <div class="card-actions justify-end">
          <div class="badge badge-outline">{article.language}</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
