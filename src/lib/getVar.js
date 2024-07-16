export const getVar = (property, element) => {
  return getComputedStyle(element).getPropertyValue(property);
}
