export const sayHi = (name) => `Hi ${name}`;

export function addProduct(name, price) {
  const productNameRegexNoSpace = /[a-zA-Z\s]/g; // no white-space allowed
  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}

export function sum(a, b) {
  return a + b;
}
