import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

jest.mock('./zipcode/zipcode.service');
// import { ZipcodeService } from './zipcode/zipcode.service';
const {ZipcodeService} = require('./zipcode/zipcode.service');

describe('AppController', () => {

  const mockZipcodeServiceGet = jest.fn(async function() {
    return 'test 123';
  });

  ZipcodeService.mockImplementation(() => {
    return {
      get: mockZipcodeServiceGet,
    };
  });

  let appController: AppController;
  const zipcodeService = new ZipcodeService();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ZipcodeService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    beforeEach(async () => {
      await appController.getHello();
    });

    it('should call ZipcodeService.get()', () => {
      expect(zipcodeService.get).toHaveBeenCalled();
    });

    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello()).toBe('Hello World!');
    // });
  });
});
