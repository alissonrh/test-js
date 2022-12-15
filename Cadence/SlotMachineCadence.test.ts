import slotCadence  from './SlotMachineCadence';

test('expected result for the cadence', () => {
  expect(slotCadence([
    { column: 1, row: 2 },
    { column: 4, row: 3 },
  ])).toStrictEqual([0, 1, 3, 5, 7, 8 ]);
});