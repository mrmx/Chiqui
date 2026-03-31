import { expect, test } from 'vitest';
import { contents, index, validateIndex } from '$lib/content';

test('has contents', () => {
	expect(contents).toBeDefined();
	expect(contents).not.toHaveLength(0);
});

test('has valid contents indexed', () => {
	expect(index).toBeDefined();
	expect(validateIndex()).toBe(true);
});
