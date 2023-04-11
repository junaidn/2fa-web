import {AuthCodeStore} from '../mobx-store/AuthCodeStore';

declare global {
  type Children = JSX.Element;

  interface AuthStore {
    authStore: AuthCodeStore;
  }
}
