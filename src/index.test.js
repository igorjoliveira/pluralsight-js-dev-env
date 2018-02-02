import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.eq(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { document } = (new JSDOM(index)).window;
    const h1 = document.getElementsByTagName('h1')[0];

    expect(h1.innerHTML).to.eq('Hello World!');
  });
});
