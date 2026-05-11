import { Test, TestingModule } from '@nestjs/testing';
import { TeamServiceController } from './team-service.controller';
import { TeamServiceService } from './team-service.service';

describe('TeamServiceController', () => {
  let teamServiceController: TeamServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamServiceController],
      providers: [TeamServiceService],
    }).compile();

    teamServiceController = app.get<TeamServiceController>(TeamServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(teamServiceController.getHello()).toBe('Hello World!');
    });
  });
});
