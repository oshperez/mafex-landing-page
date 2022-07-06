export function kebabCaseToCamelCase(string) {
  if (typeof string === "string") {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }
}

export function checkIsPredeterminedSpaceSize(size) {
  const spaceSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  return spaceSizes.includes(size);
}

export function checkIsPredeterminedFontSize(size) {
  const fontSizes = ["200", "300", "400", "500", "600", "700", "800", "900"];
  return fontSizes.includes(size);
}

export function checkIsPredeterminedFontWeight(weight) {
  const fontWeights = ["light", "regular", "medium", "semi-bold", "bold"];
  return fontWeights.includes(weight);
}
