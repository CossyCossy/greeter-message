import { Greeter } from '../index';
test('My Message', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});