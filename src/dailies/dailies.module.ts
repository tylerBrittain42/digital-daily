import { Module } from '@nestjs/common';
import { DailiesService } from './dailies.service';
import { DailiesController } from './dailies.controller';

@Module({
  controllers: [DailiesController],
  providers: [DailiesService],
})
export class DailiesModule {}
