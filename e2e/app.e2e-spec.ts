import { GoBatWwwPage } from './app.po';

describe('go-bat-www App', function() {
  let page: GoBatWwwPage;

  beforeEach(() => {
    page = new GoBatWwwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
