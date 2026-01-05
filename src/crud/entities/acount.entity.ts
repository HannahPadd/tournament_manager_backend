import { Entity,
        Column,
        PrimaryGeneratedColumn,
        OneToMany,
        OneToOne,
        JoinColumn } from 'typeorm';
import { Player } from './player.entity';
import { Team } from './team.entity';
import { Bracket } from './bracket.entity';

@Entity()
export class Acount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    grooveStatsApi: string;

    @OneToOne(() => Player)
    @JoinColumn()
    Player: Player

}