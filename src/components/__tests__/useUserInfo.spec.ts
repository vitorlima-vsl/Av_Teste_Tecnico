import { describe, it, expect } from 'vitest';
import {getUserInfo} from '@/composables/useUserInfo';

describe('getUserInfo', () => {
  it('informacoes do usuario', async () => {
    const data = await getUserInfo(`${import.meta.env.VITE_USER_NAME}`);
    expect(data).not.toBeNull();
    expect((data as any).login).toBe(`${import.meta.env.VITE_USER_NAME}`);
  });
  it('usuario nao encontrado', async () => {
    const data = await getUserInfo('usuario-invalido-!@#');
    expect(data).toBeNull();
  });
});