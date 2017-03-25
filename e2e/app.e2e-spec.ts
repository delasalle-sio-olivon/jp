import { JpPage } from './app.po';

describe('jp App', () => {
  let page: JpPage;

  beforeEach(() => {
    page = new JpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
