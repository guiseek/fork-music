import { UserGroup.Repository } from './user-group.repository';

describe('UserGroup.Repository', () => {
  it('should be defined', () => {
    expect(new UserGroup.Repository()).toBeDefined();
  });
});
