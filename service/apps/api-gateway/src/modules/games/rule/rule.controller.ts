import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RuleProxyService } from './rule.proxy.service';
import { CreateRuleDto, UpdateRuleDto, RuleFilterDto } from '@libs/common';

@ApiTags('Game Rules')
@Controller('rules')
export class RuleController {
  constructor(private readonly proxy: RuleProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Create rule' })
  create(@Body() body: CreateRuleDto) {
    return this.proxy.createRule(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rules' })
  findAll(@Query() query: RuleFilterDto) {
    return this.proxy.getRules(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get rule by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.getRuleById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update rule' })
  update(@Param('id') id: string, @Body() body: UpdateRuleDto) {
    return this.proxy.updateRule(id, body);
  }
}
