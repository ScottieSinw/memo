import { media, sizes } from '../media';

describe('media', () => {
  it('should return media query string', () => {
    const expected = `@media (min-width: ${sizes.small}px) { color: red; }`;
    const mediaQuery = `${media.small()}{ color: red; }`;

    console.log('media.small() =>', media.small());
    console.log('mediaQuery =>', mediaQuery);
    console.log('expected =>', expected);

    expect(mediaQuery.replace(/\s+/g, '')).toBe(expected.replace(/\s+/g, ''));
  });
});
