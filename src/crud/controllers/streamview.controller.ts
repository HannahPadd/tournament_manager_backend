import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { StreamViewService } from '../services';
import { Player } from '../entities';
import { StreamView } from '../view/stream.view';


@Controller('streamview')
export class StreamViewController {
    constructor(private readonly service: StreamViewService) { }

    @Get()
    async findall(): Promise<StreamView[]> {
        const players = this.service.findAllPlayers();
        const brackets = this.service.findAllBrackets();
        let streamViewList = [];
        //TODO: Add all fields to player profile
        (await players).forEach((player: Player) => {
            const streamView = new StreamView()

            streamView.playerPictureUrl = "";
            streamView.playerName = "";
            streamView.playedFor = "";
            streamView. country = "";
            streamView.highestStaminaPass = 0;
            streamView.staminaLevel = 0;
            streamView.footSpeedLevel = 0;
            streamView.crossOverTechLevel = 0;
            streamView.sideSwitchTechLevel = 0;
            streamView.bracketTechLevel = 0;
            streamView.doubleStepTechLevel = 0;
            streamView.jackTechLevel = 0;
            streamView.xmodTechLevel = 0;
            streamView.burstTechLevel = 0;
            streamView.rhythmsTechLevel = 0;

            streamViewList.push(streamView);
        });
        console.log(streamViewList);
        return streamViewList;
    }

     @Get(':id')
    async findOne(@Param('id') id: number): Promise<StreamView | null> {
        const player = await this.service.findOnePlayer(id);
        //const brackets = this.service.findAllBrackets();

        //TODO: Add all fields to player profile
            const streamView = new StreamView()

            streamView.playerPictureUrl = "";
            streamView.playerName = "";
            streamView.playedFor = "";
            streamView. country = "";
            streamView.highestStaminaPass = 0;
            streamView.staminaLevel = 0;
            streamView.footSpeedLevel = 0;
            streamView.crossOverTechLevel = 0;
            streamView.sideSwitchTechLevel = 0;
            streamView.bracketTechLevel = 0;
            streamView.doubleStepTechLevel = 0;
            streamView.jackTechLevel = 0;
            streamView.xmodTechLevel = 0;
            streamView.burstTechLevel = 0;
            streamView.rhythmsTechLevel = 0;

        return streamView;
    }
    
    //Get Player
    //@Get('player/id')
    //findOne() {
        //
        //}
}