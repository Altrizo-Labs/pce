export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
