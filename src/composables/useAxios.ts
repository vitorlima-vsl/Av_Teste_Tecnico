import axios from 'axios';

export default function useAxios() {
  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, 
    },
  });


   // const get = async (url: string) => {
  //   const response = await axiosInstance.get(url);
  //   return response.data;
  // }

  // <T> ai ta servindo para aceitar os tipos genericos 
  const get = async <T>(url: string, params = {}): Promise<{ data: T; headers: any }> => {
    const response = await axiosInstance.get<T>(url, { params });
    return { data: response.data, headers: response.headers };
  };

  const remove = async (url: string) => {
    const response = await axiosInstance.delete(url);
    return response.data;
  };

  return { get, remove };
}


// export const get = async (username: string) => {
//   const response = await axios.get(`https://api.github.com/users/${username}`);
//   return response.data;
// }
