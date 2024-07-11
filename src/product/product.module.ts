import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
