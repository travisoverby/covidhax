import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ZipcodeService } from './zipcode.service';

describe('ZipcodeService', () => {
  let service: ZipcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ZipcodeService],
    }).compile();

    service = module.get<ZipcodeService>(ZipcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
