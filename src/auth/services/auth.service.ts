import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { AuthRefreshTokenDto } from '../dtos';

import { Account } from '@persistence/entities';
import refreshJwtConfig from '@auth/config/refresh.jwt.config';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Account)
        private accountRepo: Repository<Account>,
        private jwtService: JwtService,
        @Inject(refreshJwtConfig.KEY) private refreshTokenConfig:ConfigType<typeof refreshJwtConfig>
    ) { }

    
    async validateUser(username: string, password: string) {
        const user = await this.accountRepo.findOneBy({ username });
        const isMatch = await bcrypt.compare(password, user?.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async validateRefreshToken(username: string, refreshToken: string) {
        const user = await this.accountRepo.findOneBy({ username });
        if (!user || !user.refreshToken) return null;

        const matches = await bcrypt.compare(
            refreshToken,
            user.refreshToken,
        );

        return matches ? user : null;
        }

    async login(user: any) {
        const payload = {
            sub: user.id,
            username: user.username,
            //TODO: add roles
            roles: [],
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async getTokens(userId: string, email: string) {
        const payload = { sub: userId, email };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload),
            this.jwtService.signAsync(payload, this.refreshTokenConfig),
        ]);

        //await this.saveRefreshTokenHash(userId, refreshToken);

        return { userId, accessToken, refreshToken };
    }
}

