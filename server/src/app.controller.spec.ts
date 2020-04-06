import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZipcodeService } from './zipcode/zipcode.service';

jest.mock('./zipcode/zipcode.service');

describe('AppController', () => {
  const mockZipcodeGet = jest.fn(() => 'fake-zip-code');

  ZipcodeService['mockImplementation'](() => {
    return {
      get: mockZipcodeGet
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
    let returnValue;

    beforeEach(async () => {
      returnValue = await appController.getHello();
    });

    it('should call ZipcodeService.get()', () => {
      expect(zipcodeService.get).toHaveBeenCalled();
    });

    it('should return "Hello World!" and zipcode', () => {
      expect(returnValue).toBe('Hello World!... and your zip code is: fake-zip-code');
    });
  });
});
