import { List } from './list';

test('empty list is instantiated', () => {
  const list = new List<number>();
  expect(list.items).toEqual([]);
});

test('list is instantiated with items', () => {
  const list = new List<string>('one', 'two');
  expect(list.items).toEqual(['one', 'two']);
});

test('list has length', () => {
  const list = new List<string>('one', 'two');
  expect(list.length).toEqual(2);
});

test('can get value by index', () => {
  const list = new List<string>('one', 'two');
  expect(list.get(1)).toBe('two');
});

test('items are pushed to list', () => {
  const list = new List<string>('one', 'two');
  list.push('three', 'four');
  expect(list.items).toEqual(['one', 'two', 'three', 'four']);
});

test('items are unshifted to list', () => {
  const list = new List<string>('one', 'two');
  list.unshift('three', 'four');
  expect(list.items).toEqual(['three', 'four', 'one', 'two']);
});

test('item is popped from list', () => {
  const list = new List<string>('one', 'two', 'three');
  const popped = list.pop();
  expect(popped).toBe('three');
  expect(list.items).toEqual(['one', 'two']);
});

test('items are spliced from list', () => {
  const list = new List<string>('one', 'two', 'three', 'four', 'five');
  const spliced = list.splice(2, 2);
  expect(list.items).toEqual(['one', 'two', 'five']);
  expect(spliced.items).toEqual(['three', 'four']);
});

test('item is shifted', () => {
  const list = new List<string>('one', 'two', 'three');
  const shifted = list.shift();
  expect(shifted).toBe('one');
  expect(list.items).toEqual(['two', 'three']);
});
