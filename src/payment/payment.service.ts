import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class PaymentService {
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Wallet;

  constructor() {
    const infuraUrl = process.env.INFURA_URL;
    const privateKey = process.env.PRIVATE_KEY;

    if (!infuraUrl || !privateKey) {
      throw new Error('INFURA_URL and PRIVATE_KEY must be defined in the .env file');
    }
    
    this.provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
    this.signer = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
  }

  async sendTransaction(to: string, amount: number): Promise<string> {
    const tx = await this.signer.sendTransaction({
      to,
      value: ethers.parseEther(amount.toString()),
    });
    return tx.hash;
  }
}