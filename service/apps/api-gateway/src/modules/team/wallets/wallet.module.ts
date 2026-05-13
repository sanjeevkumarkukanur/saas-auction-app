import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletProxyService } from './wallet.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [WalletController],
  providers: [WalletProxyService],
})
export class WalletModule {}
