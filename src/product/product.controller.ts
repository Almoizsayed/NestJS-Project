import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Book } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productservice: ProductService) {}
  @Post()
  async create(
    @Body() productData: { name: string; description: string; price: number },
  ): Promise<Book> {
    console.log({ productData });
    return this.productservice.create(productData);
  }
  @Get()
  async findAll(): Promise<Book[]> {
    return this.productservice.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: String): Promise<Book> {
    return this.productservice.findOne(+id);
  }
  @Put(':id')
  async update(
    @Param('id') id: String,
    @Body()
    productData: { name?: string; description?: string; price?: number },
  ): Promise<Book> {
    return this.productservice.update(+id, productData);
  }
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Book> {
    return this.productservice.remove(+id);
  }
}
