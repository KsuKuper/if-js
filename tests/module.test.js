import { randProductName, randNumber } from '@ngneat/falso';
import { addProduct } from '../scripts/module';
import { sum } from '../scripts/module';

test('When adding new valid product, get successful confirmation', () => {
  // const name = 'Handmade'; // passed
  // const price = 704809; // passed
  const name = randProductName();
  const price = randNumber();
  // Generated random input: { 'Handmade Granite Cheese', 704809 }
  console.log(name, price);
  expect(addProduct(name, price)).toBe(true);
  // Test failed, the random input triggered some path we never planned for.
  // We discovered a bug early!
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
console.log(sum);
