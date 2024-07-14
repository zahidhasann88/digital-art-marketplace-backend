import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  createTransaction(@Body() transactionData: any) {
    return this.transactionService.createTransaction(transactionData);
  }

  @Get()
  getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

  @Get(':id')
  getTransactionById(@Param('id') id: number) {
    return this.transactionService.getTransactionById(id);
  }
}
