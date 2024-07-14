import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return this.artistService.getProfile(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Put('profile')
    updateProfile(@Req() req, @Body() updateData: any) {
        return this.artistService.updateProfile(req.user.userId, updateData);
    }
}
