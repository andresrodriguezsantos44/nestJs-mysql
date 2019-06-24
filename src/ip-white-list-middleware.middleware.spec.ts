import { IpWhiteListMiddlewareMiddleware } from './ip-white-list-middleware.middleware';

describe('IpWhiteListMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new IpWhiteListMiddlewareMiddleware()).toBeDefined();
  });
});
