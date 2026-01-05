import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinColumn, JoinTable } from 'typeorm';
import { Score } from './score.entity'
import { Team } from './team.entity'
import { Match } from './match.entity';
import { MatchAssignment } from './match_assignment.entity';
import { Bracket } from './bracket.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  playerPictureUrl: string;

  @Column()
  playerName: string;

  @Column()
  playedFor: string;

  @Column()
  country: string;

  @Column()
  highestStaminaPass: number;

  @Column()
  statminaLevel: number;

  @Column()
  footSpeedLevel: number;

  @Column()
  crossOverTechLevel: number;

  @Column()
  footSwitchTechLevel: number;

  @Column()
  sideSwitchTechLevel: number;

  @Column()
  bracketTechLevel: number;

  @Column()
  doubleStepTechLevel: number;

  @Column()
  jackTechLevel: number;

  @Column()
  xmodTechLevel: number;

  @Column()
  burstTechLeven: number;

  @Column()
  rhythmsTechLevel: number;

  @Column({ default: ""})
  groovestatsApi: string;

  @OneToMany(() => Score, (score) => score.player, { cascade: true })
  scores: Score[]

  @ManyToOne(() => Team, (team) => team.players, { orphanedRowAction: "nullify" })
  @JoinColumn()
  team: Team;

  @ManyToMany(() => Match, (match) => match.players)
  matches: Match[];

  @OneToMany(() => MatchAssignment, (matchAssignment) => matchAssignment.player, { eager: true })
  matchAssignments: MatchAssignment[];

  @ManyToOne(() => Bracket, (bracket) => bracket.player)
  @JoinColumn()
  bracket: Bracket
}

