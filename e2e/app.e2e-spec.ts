import { WechatPage } from './app.po';

describe('wechat App', () => {
  let page: WechatPage;

  beforeEach(() => {
    page = new WechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
