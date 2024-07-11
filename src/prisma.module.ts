import { Global } from '@nestjs/common';
import { prismaservice } from './prisma.service';
import { Module } from '@nestjs/common';
@Global()
@Module({
  imports: [prismaservice],
  controllers: [],
  providers: [prismaservice],
  exports: [prismaservice],
})
export class PrismaModule {}
