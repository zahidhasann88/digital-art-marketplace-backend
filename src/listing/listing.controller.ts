import { Controller, Get, Post, Put, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { ListingService } from './listing.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('listing')
export class ListingController {
    constructor(private listingService: ListingService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    createListing(@Req() req, @Body() listingData: any) {
        return this.listingService.createListing(req.user.userId, listingData);
    }

    @Get()
    getAllListings() {
        return this.listingService.getAllListings();
    }

    @Get(':id')
    getListingById(@Param('id') id: number) {
        return this.listingService.getListingById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateListing(@Param('id') id: number, @Body() updateData: any) {
        return this.listingService.updateListing(id, updateData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteListing(@Param('id') id: number) {
        return this.listingService.deleteListing(id);
    }
}
