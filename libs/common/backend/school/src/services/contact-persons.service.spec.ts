import { Test, TestingModule } from '@nestjs/testing';
import { ContactPersonsService } from './contact-persons.service';

describe('ContactPersonsService', () => {
  let service: ContactPersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactPersonsService],
    }).compile();

    service = module.get<ContactPersonsService>(ContactPersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
