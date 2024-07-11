import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { prismaservice } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: prismaservice) {}
  async create(data: Prisma.BookCreateInput): Promise<Book> {
    console.log({ data });
    return this.prisma.book.create({ data });
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }
  async findOne(id: number): Promise<Book> {
    return this.prisma.book.findUnique({ where: { id } });
  }
  async update(id: number, data: Prisma.BookUpdateInput): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data });
  }
  async remove(id: number): Promise<Book> {
    return this.prisma.book.delete({ where: { id } });
  }
}
