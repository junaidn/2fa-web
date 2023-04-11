import {makeAutoObservable} from 'mobx';
import {generateCode} from '../utils/common';

interface AuthCode {
  code: string;
  service: string;
  timer: number;
}

export class AuthCodeStore {
  authCodes: AuthCode[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCode(service: string): AuthCode[] {
    this.authCodes.push({code: generateCode(), service, timer: 60});
    return this.authCodes;
  }

  getCodes(): AuthCode[] {
    return this.authCodes;
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
