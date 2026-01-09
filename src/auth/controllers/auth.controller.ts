import { 
    Body,
    Controller,
    ValidationPipe, 
    Post, 
    Get, 
    Request, 
    UseGuards } from '@nestjs/common';

import { AuthService } from '../services';
import { AuthRefreshTokenDto } from '../dtos';


@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) { }

    @Post('auth/login')
    async login(@Request() reg) {
        return "req.user";
    }


    @UseGuards()
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Get('refresh')
    async getRefreshToken(@Body(new ValidationPipe()) refreshToken: AuthRefreshTokenDto) {
        return await this.service.getRefreshToken(refreshToken);
    }
}