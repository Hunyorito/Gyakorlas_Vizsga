import { Test, TestingModule } from '@nestjs/testing';
import { MemeberService } from './memeber.service';

describe('MemeberService', () => {
  let service: MemeberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemeberService],
    }).compile();

    service = module.get<MemeberService>(MemeberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
