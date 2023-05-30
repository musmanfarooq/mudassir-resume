export default function convertToBold(text: string): string {
  const boldTagRegex = /<b>(.*?)<\/b>/g;
  return text.replace(boldTagRegex, '<strong>$1</strong>');
}