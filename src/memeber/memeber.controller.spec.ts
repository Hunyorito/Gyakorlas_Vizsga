import { Test, TestingModule } from '@nestjs/testing';
import { MemeberController } from './memeber.controller';
import { MemeberService } from './memeber.service';

describe('MemeberController', () => {
  let controller: MemeberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemeberController],
      providers: [MemeberService],
    }).compile();

    controller = module.get<MemeberController>(MemeberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
