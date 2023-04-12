import {makeAutoObservable} from 'mobx';
import {generateCode} from '../utils/common';

export class AuthCodeStore {
  authCodes: AuthCode[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addService(service: string): AuthCode[] {
    this.authCodes.push({code: generateCode(), service, timer: 60, createdAt: Date.now()});
    return this.authCodes;
  }

  getServices(): AuthCode[] {
    // eslint-disable-next-line id-length
    return this.authCodes.slice().sort((a, b) => b.createdAt - a.createdAt);
  }

  updateTimerAndRegenrateCode(): AuthCode[] {
    this.authCodes.map((authCode) => {
      if (authCode.timer === 0) {
        authCode.timer = 60;
        authCode.code = generateCode();
      } else {
        authCode.timer -= 1;
      }
    });
    return this.authCodes;
  }
}
