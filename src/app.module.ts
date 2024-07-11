import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
