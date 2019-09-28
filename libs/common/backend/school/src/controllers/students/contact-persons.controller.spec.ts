import { Test, TestingModule } from '@nestjs/testing';
import { ContactPersonsController } from './contact-persons.controller';

describe('ContactPersons Controller', () => {
  let controller: ContactPersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactPersonsController],
    }).compile();

    controller = module.get<ContactPersonsController>(ContactPersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
