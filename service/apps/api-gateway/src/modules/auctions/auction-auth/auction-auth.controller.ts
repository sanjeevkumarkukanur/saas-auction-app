import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuctionAuthProxy } from './auction-auth.proxy';

@ApiTags('Auction Auth')
@Controller('auction-auth')
export class AuctionAuthController {
  constructor(private readonly proxy: AuctionAuthProxy) {}

  @Post('assign-role')
  @ApiOperation({ summary: 'Assign role to user in auction' })
  assignRole(
    @Body()
    body: {
      auctionId: string;
      userId: string;
      role: string;
    },
  ) {
    return this.proxy.assignRole(body);
  }

  @Post('validate-admin')
  @ApiOperation({ summary: 'Validate admin access' })
  validateAdmin(
    @Body()
    body: {
      auctionId: string;
      userId: string;
    },
  ) {
    return this.proxy.validateAdmin(body);
  }

  @Post('validate-team-owner')
  @ApiOperation({ summary: 'Validate team owner access' })
  validateTeamOwner(
    @Body()
    body: {
      auctionId: string;
      userId: string;
    },
  ) {
    return this.proxy.validateTeamOwner(body);
  }
}
