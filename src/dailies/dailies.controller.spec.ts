import { Test, TestingModule } from '@nestjs/testing';
import { DailiesController } from './dailies.controller';
import { DailiesService } from './dailies.service';

describe('DailiesController', () => {
  let controller: DailiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailiesController],
      providers: [DailiesService],
    }).compile();

    controller = module.get<DailiesController>(DailiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
