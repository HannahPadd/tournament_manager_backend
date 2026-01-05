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
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: "" })
    grooveStatsApi: string;

    @OneToOne(() => Player)
    @JoinColumn()
    player: Player

}