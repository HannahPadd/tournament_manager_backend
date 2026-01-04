import { IsNotEmpty, IsNumber, IsString, IsOptional, } from 'class-validator';
import { Type } from 'class-transformer';
import { Team }  from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreatePlayerDto {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Name of the player',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  name: string;

  @ApiProperty({
    example: 'example@example.com',
    description: 'Email of the player',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  email: string;
  
  @ApiProperty({
    example: 'Password!',
    description: 'Player password',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  password: string;
  
  @ApiProperty({
    example: 'NL',
    description: 'Country the player is representing',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  country: string;

  @ApiProperty({
    example: '',
    description: 'api key for groovestats'
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  groovestatsApi: string;

  @ApiProperty({
    example: '1',
    description: 'ID for the results table',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  resultsID: string

  @ApiProperty({
    example: 1,
    description: 'ID of the team the player belongs to',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  teamId: number;
}

export class UpdatePlayerDto {
  @ApiProperty({
    example: 'Jane Doe',
    description: 'New name of the player',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  name: string;

   @ApiProperty({
    example: 'example@example.com',
    description: 'New email of the player',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  email: string;
  
  @ApiProperty({
    example: 'Password!',
    description: 'New player password',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  password: string;
  
  @ApiProperty({
    example: 'NL',
    description: 'Country the player is representing',
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  country: string;

  @ApiProperty({
    example: '',
    description: 'New api key for groovestats'
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  groovestatsApi: string;

  @ApiProperty({
    example: '1',
    description: 'ID for the results table',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  resultsID: string

  @ApiProperty({
    example: 2,
    description: 'New ID of the team the player belongs to',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  teamId: number;

  team?: Team;
}
