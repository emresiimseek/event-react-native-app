export const getValidationItems = (values, fieldName, labelName) => {
  let items = [];

  for (const key in values) {
    if (key == fieldName) {
      const data = values[key];
      items = data.map((d) => {
        const firstIndex = d.indexOf("'");
        const lastIndex = d.lastIndexOf("'");
        const value = d.slice(firstIndex + 1, lastIndex);
        return d.replace(value, labelName);
      });
    }
  }
  return items.join(" ");
};
