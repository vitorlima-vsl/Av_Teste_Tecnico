import useAxios from './useAxios';

const { get } = useAxios();

export const getUserInfo = async (username: string) => {
  try {
    const { data } = await get(`/users/${username}`);
    return data; 
  } catch (error) {
    console.error('Nao conseguiu adquirir as informacoes de usuarip:', error);
    return null; 
  }
};