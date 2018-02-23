import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('user.html', () => {
  it('should have h1 that says Users', () => {
    const index = fs.readFileSync('./src/user.html', 'utf-8');
    const { document } = (new JSDOM(index)).window;
    const h1 = document.getElementsByTagName('h1')[0];

    expect(h1.innerHTML).to.eq('Users');

    document.close();
  });
});
