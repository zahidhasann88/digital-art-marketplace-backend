import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { listings: true },
    });
  }

  async updateProfile(userId: number, updateData: any) {
    return this.prisma.user.update({
      where: { id: userId },
      data: updateData,
    });
  }
}
