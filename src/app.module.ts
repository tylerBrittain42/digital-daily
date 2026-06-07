import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailiesModule } from './dailies/dailies.module';

@Module({
  imports: [DailiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
