import { tokenlist } from '../../src';
import components from './components-list.json';

console.log(
  Array.from(new Set(components))
    .filter((component) => {
      const addr = component.split('-')[1];

      return tokenlist.tokens.find(
        (token) =>
          token.address.toLowerCase() === addr &&
          token.tags.every((tag) => tag !== 'component'),
      );
    })
    .map((component) => component.split('-')[1]),
);
