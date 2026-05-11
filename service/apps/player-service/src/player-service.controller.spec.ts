import { Test, TestingModule } from '@nestjs/testing';
import { PlayerServiceController } from './player-service.controller';
import { PlayerServiceService } from './player-service.service';

describe('PlayerServiceController', () => {
  let playerServiceController: PlayerServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerServiceController],
      providers: [PlayerServiceService],
    }).compile();

    playerServiceController = app.get<PlayerServiceController>(PlayerServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(playerServiceController.getHello()).toBe('Hello World!');
    });
  });
});
