import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBracketDto, UpdateBracketDto } from '../dtos/bracket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Bracket, Player, Match, Round, Account, Score, Team } from '../entities';
import { CreateAccountPlayerDto, UpdateAccountPlayerDto } from '../dtos';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepo: Repository<Account>,
        @InjectRepository(Player)
        private playerRepo: Repository<Player>
    ) { }

    //TODO: Add missing tables to player info
    async create(dto: CreateAccountPlayerDto) {
        const player = new Player();
        const account = new Account();
        //let score: Score[] = [];
        //const team = new Team();
        //const bracket = new Bracket();

        player.playerPictureUrl = dto.playerPictureUrl;
        player.playerName = dto.username;
        player.playedFor = dto.playedFor;
        player.country = dto.country;
        player.highestStaminaPass = dto.highestStaminaPass;
        player.statminaLevel = dto.staminaLevel;
        player.footSpeedLevel = dto.footSpeedLevel;
        player.crossOverTechLevel = dto.crossOverTechLevel;
        player.sideSwitchTechLevel = dto.sideSwitchTechLevel;
        player.bracketTechLevel = dto.bracketTechLevel;
        player.doubleStepTechLevel = dto.doubleStepTechLevel;
        player.jackTechLevel = dto.jackTechLevel;
        player.xmodTechLevel = dto.xmodTechLevel;
        player.burstTechLevel = dto.burstTechLevel;
        player.rhythmsTechLevel = dto.rhythmsTechLevel;
        //player.scores = score;
        //player.team = team;
        //player.bracket = bracket;

        await this.playerRepo.save(player);

        account.username = dto.username;
        account.email = dto.email;
        account.password = dto.password;
        account.player = player;


        await this.accountRepo.save(account);

        return account;
    }
}