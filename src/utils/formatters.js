import dayjs from "dayjs";

export function formatDate(date) {
  return dayjs(date).format("YYYY ,MMMM D");
}

export function formatPath(p) {
  let [path] = p.match(/\/blog\/.*\.mdx$/);
  return path.replace(/\.mdx$/, "");
}
