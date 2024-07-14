import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  async processPayment(@Body() paymentData: any) {
    const { to, amount } = paymentData;
    const transactionHash = await this.paymentService.sendTransaction(to, amount);
    return { transactionHash };
  }
}
