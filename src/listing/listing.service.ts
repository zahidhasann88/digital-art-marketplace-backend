import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  async createListing(artistId: number, listingData: any) {
    return this.prisma.listing.create({
      data: {
        ...listingData,
        artist: { connect: { id: artistId } },
      },
    });
  }

  async getAllListings() {
    return this.prisma.listing.findMany({
      include: { artist: true },
    });
  }

  async getListingById(id: number) {
    return this.prisma.listing.findUnique({
      where: { id },
      include: { artist: true },
    });
  }

  async updateListing(id: number, updateData: any) {
    return this.prisma.listing.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteListing(id: number) {
    return this.prisma.listing.delete({
      where: { id },
    });
  }
}
