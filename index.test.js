const rook = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof rook(7, 2, 7, 5);

	expect(type).toBe('boolean');
});

test('Тест. x1: 6, y1: 4, x2: 7, y2: 5', () => {
	const res = rook(7, 2, 7, 5);

	expect(res).toBe(true);
});

test('Тест. x1: 1, y1: 6, x2: 5, y2: 4', () => {
	const res = rook(1, 6, 5, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 8, y1: 8, x2: 4, y2: 4', () => {
	const res = rook(8, 8, 4, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 5, y1: 2, x2: 2, y2: 5', () => {
	const res = rook(5, 2, 2, 5);

	expect(res).toBe(false);
});

test('Тест. x1: 8, y1: 1, x2: 8, y2: 8', () => {
	const res = rook(8, 1, 8, 8);

	expect(res).toBe(true);
});

test('Тест. x1: 6, y1: 2, x2: 8, y2: 1', () => {
	const res = rook(6, 2, 8, 1);

	expect(res).toBe(false);
});