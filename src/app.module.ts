import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MemeberModule } from './memeber/memeber.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MemeberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
