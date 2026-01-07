import { Body, Controller, ValidationPipe, Post } from '@nestjs/common';
import { AuthService } from '../services';
import { Account } from '@persistance/entities';
import { SignInDto } from '../dtos';



@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) { }
    @Post('login')
    async login(@Body(new ValidationPipe()) credentials: SignInDto) {
        return await this.service.login(credentials);
    }
}