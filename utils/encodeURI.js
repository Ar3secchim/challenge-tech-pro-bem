export default function encodeURI(word) {
  let palavras = word.split(" ");

  let query = palavras.join(" ");

  if (query.length > 500) {
    query = query.substring(0, 50);
  }
  return query;
}
