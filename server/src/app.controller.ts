import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ZipcodeService } from './zipcode/zipcode.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private zipcodeService: ZipcodeService
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const zipcode: string = await this.zipcodeService.get();
    return this.appService.getHello() + '... and your zip code is: ' + zipcode;
  }
}
