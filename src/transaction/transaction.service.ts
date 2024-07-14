import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(transactionData: any) {
    return this.prisma.transaction.create({
      data: transactionData,
    });
  }

  async getAllTransactions() {
    return this.prisma.transaction.findMany({
      include: { buyer: true, listing: true },
    });
  }

  async getTransactionById(id: number) {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: { buyer: true, listing: true },
    });
  }
}
