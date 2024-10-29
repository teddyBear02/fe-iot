import { cookieRemove, cookieSet, storageRemove, storageSet } from '@/helpers/appStorage';
import { StorageKey } from '@/constants';
import { ResponseLogin } from '@/models';

export const saveAuthData = (payload: ResponseLogin) => {
  cookieSet(StorageKey.TOKEN, payload.accessToken);
  storageSet(StorageKey.USER, JSON.stringify(payload.user));
  storageSet(StorageKey.NEWEST_SIGN_IN, 'true');
};

export const clearAuthData = () => {
  cookieRemove(StorageKey.TOKEN);
  cookieRemove(StorageKey.REFRESH_TOKEN);
  storageRemove(StorageKey.TOKEN);
  storageRemove(StorageKey.REFRESH_TOKEN);
  storageRemove(StorageKey.EXPIRES);
  storageRemove(StorageKey.EXPIRES_IN);
  storageRemove(StorageKey.USER);
  storageRemove(StorageKey.PATH_LIST);
  storageSet(StorageKey.NEWEST_SIGN_IN, 'false');
};

export const base64UrlDecode = (token: string) => {
  let [headerB64, payloadB64] = token.split('.');
  if (!payloadB64) return 'user';
  payloadB64 = payloadB64.replace(/-/g, '+').replace(/_/g, '/');
  const pad = payloadB64.length % 4;
  if (pad) {
    payloadB64 += new Array(5 - pad).join('=');
  }
  return JSON.parse(atob(payloadB64));
};