import { ApiProperty } from '@nestjs/swagger';

export class WalletTransfersDto {

    @ApiProperty()
    id : string;

    @ApiProperty()
    walletId : string;

    @ApiProperty()
    userId : string;

    @ApiProperty()
    balance : number;

    @ApiProperty()
    createdAt : Date;

    @ApiProperty()
    updatedAt : Date;

}

export class WalletTransfersHistoryDto {

    @ApiProperty({ example: "33e3b1f9-b211-49df-b70b-8fdc1037b8d3" })
    id : string;

    @ApiProperty()
    userId : string;

    @ApiProperty()
    walletId : string;

    @ApiProperty({ description: "ID of the user who originated the transfer, applicable to display the user's name on incoming transfers" })
    originUserId : string;

    @ApiProperty({ description: "Name of the user who originated the transfer, applicable to display the user's name on incoming transfers" })
    originUserName : string;

    @ApiProperty({ enum: ['video_view', 'video_like'], description: "Identifier of the origin of the transfer. In cases of transfer received through a like, video viewing etc." })
    origin : string;

    @ApiProperty({ enum: ['sent', 'received'] })
    action : string;

    @ApiProperty()
    balance : number;

    @ApiProperty()
    createdAt : Date;

    @ApiProperty()
    updatedAt : Date;

}