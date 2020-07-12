export const textTruncate = (str: string, len: number = 80): string => {
  return str.length <= len ? str : str.substr(0, len) + '...';
};
