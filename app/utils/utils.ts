export const fulltextSearch = <T>(items: T[], searchTerm: string): T[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  const checkValue = (value: any): boolean => {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(normalizedSearchTerm);
    }
    if (Array.isArray(value)) {
      return value.some((item) => checkValue(item));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).some((v) => checkValue(v));
    }
    return false;
  };

  return items.filter((item) => {
    return Object.values(item as object).some((value) => checkValue(value));
  });
};
