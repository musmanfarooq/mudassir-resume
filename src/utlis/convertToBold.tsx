export const removeBoldTags = (text: string) => {
  return text.replace(
    /<b>(.*?)<\/b>/g,
    (_, content) => `<span style="font-weight: bold">${content}</span>`
  );
};