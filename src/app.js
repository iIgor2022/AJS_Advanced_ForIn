export default function orderByProps(object, orderList) {
  const result = [];
  for (const property of orderList) {
    if (property in object) {
      result.push({
        key: property,
        value: object[property],
      });
      delete object[property];
    }
  }
  for (const property of Object.keys(object).sort()) {
    result.push({
      key: property,
      value: object[property],
    });
  }
  return result;
}
