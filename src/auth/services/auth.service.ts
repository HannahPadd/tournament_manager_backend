import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt';
import { SignInDto } from '../dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Account } from '@persistance/entities';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Account)
        private accountRepo: Repository<Account>,
        private jwtService: JwtService
    ) { }

    
async login(signInDto: SignInDto) : Promise<{ access_token: string }> {
        const username = signInDto.username;
        const pass = signInDto.password;
        const user = await this.accountRepo.findOneBy({ username });
        const isMatch = await bcrypt.compare(pass, user?.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}