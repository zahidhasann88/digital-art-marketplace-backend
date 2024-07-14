import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArtistModule } from './artist/artist.module';
import { ListingModule } from './listing/listing.module';
import { PaymentModule } from './payment/payment.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [AuthModule, ArtistModule, ListingModule, PaymentModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
