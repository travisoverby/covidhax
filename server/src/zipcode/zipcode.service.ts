import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IPINFO_TOKEN } from '../config/token';

const endpoint = `https://ipinfo.io/?token=${IPINFO_TOKEN}`;

@Injectable()
export class ZipcodeService {
  constructor(private httpService?: HttpService) {}

  currentZipCode: string;

  async get(): Promise<string> {
    if (!this.currentZipCode) {
      await this.fetch();
    }
    return this.currentZipCode;
  }

  async fetch() {
    const observable: Observable<any> = this.httpService.get(endpoint);

    await new Promise(resolve => {
      observable.subscribe(resolve);
    }).then((response: any) => {
      this.currentZipCode = response.data.id;
    });
  }
}
