import orderByProps from '../app';

test('Testing orderByProps function', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const properties = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(object, properties)).toEqual(expected);
});

test('Testing orderByProps function with wrong keys', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const properties = ['person'];
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(object, properties)).toEqual(expected);
});
