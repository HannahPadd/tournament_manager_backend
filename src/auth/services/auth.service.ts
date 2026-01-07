import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AccountService } from '../../account/services';
import { AuthenticateUserDto } from '../dtos/credentials.dto';
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

    
async login(credentials: AuthenticateUserDto) : Promise<{ access_token: string }> {
        const username = credentials.username;
        const pass = credentials.password;
        const user = await this.accountRepo.findOneBy({ username });
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}