import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@persistance/entities';

export class SignInDto {
    @ApiProperty({

    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({

    })
    @IsNotEmpty()
    @IsString()
    password: string;
}