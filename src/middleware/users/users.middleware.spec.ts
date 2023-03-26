import { UsersMiddleware } from './users.middleware';

describe('MiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new UsersMiddleware()).toBeDefined();
  });
});
