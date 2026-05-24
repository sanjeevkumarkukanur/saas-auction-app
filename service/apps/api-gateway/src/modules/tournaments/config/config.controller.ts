import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigProxy } from './config.proxy';
import { CreateConfigDto, UpdateConfigDto } from '@libs/common';

@ApiTags('Tournament Config')
@Controller('configs')
export class ConfigController {
  constructor(private readonly proxy: ConfigProxy) {}

  @Post()
  create(@Body() dto: CreateConfigDto) {
    return this.proxy.create(dto);
  }

  @Get(':tournamentId')
  find(@Param('tournamentId') tournamentId: string) {
    return this.proxy.find(tournamentId);
  }

  @Patch(':tournamentId')
  update(
    @Param('tournamentId') tournamentId: string,
    @Body() dto: UpdateConfigDto,
  ) {
    return this.proxy.update(tournamentId, dto);
  }

  @Delete(':tournamentId')
  remove(@Param('tournamentId') tournamentId: string) {
    return this.proxy.remove(tournamentId);
  }
}
