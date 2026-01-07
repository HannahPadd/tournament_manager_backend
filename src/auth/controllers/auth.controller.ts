import { Body, Controller, ValidationPipe, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services';
import { Account } from '@persistance/entities';
import { SignInDto } from '../dtos';
import { AuthGuard } from '../guards/auth.guard';



@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) { }


    @Post('login')
    async login(@Body(new ValidationPipe()) credentials: SignInDto) {
        return await this.service.login(credentials);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}