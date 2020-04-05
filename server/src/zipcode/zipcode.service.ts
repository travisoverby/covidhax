import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

const endpoint = 'https://api.github.com/users/bananno';

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
