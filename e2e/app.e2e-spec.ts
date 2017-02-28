import { EventlistingPage } from './app.po';

describe('eventlisting App', function() {
  let page: EventlistingPage;

  beforeEach(() => {
    page = new EventlistingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
