import { Module } from '@nestjs/common';
import { MemeberService } from './memeber.service';
import { MemeberController } from './memeber.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MemeberController],
  providers: [MemeberService, PrismaService],
})
export class MemeberModule {}
