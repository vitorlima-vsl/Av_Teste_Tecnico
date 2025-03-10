import { ref } from 'vue';
import useAxios from './useAxios';
import type { Repository } from '@/types/repository';

const { get } = useAxios();

type GithubVisibility = 'all' | 'public' | 'private';

const repositories = ref<Repository[]>([]);
const currentPage = ref<number>(1);
const itemsPerPage = 8; // Pode testar com outro valor :)
const totalPages = ref<number>(1); 
const searchName = ref<string>('');
const searchVisibility = ref<GithubVisibility>('all');

const extractTotalPagesFromLinkHeader = (linkHeader: string): number => {
  const links = linkHeader.split(', ');
  let lastParamPage = 0;

  links.forEach((link) => {
    if (link.includes('rel="last"')) {
      const url = link.split('; ')[0].slice(1, -1);
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const lastPage = urlParams.get('page');
      lastParamPage = lastPage ? parseInt(lastPage, 10) : 0;
    }
  });

  return lastParamPage;
};


const updateTotalPages = (linkHeader: string | undefined): void => {
  if (!linkHeader) {
    totalPages.value = 1;
  } else {
    const extractedPages = extractTotalPagesFromLinkHeader(linkHeader);
    if (extractedPages > 0) {
      totalPages.value = extractedPages;
    }
  }
};

const loadRepositories = async (page: number): Promise<void> => {
  try {
    const { data, headers } = await get<Repository[]>('/user/repos', {
      per_page: itemsPerPage,
      page: page,
      sort: 'created',
      visibility: searchVisibility.value,
      affiliation: 'owner',
    });

    const filteredData = data.filter(repo => repo.name.includes(''));
    repositories.value = filteredData;

   
    updateTotalPages(headers.link);

    currentPage.value = page;
  } catch (error) {
    console.error('Nao conseguiu dar fetch nos repositorios:', error);
  }
};

const searchRepositories = async (page: number): Promise<void> => {
  try {
    const params: Record<string, any> = {
      per_page: itemsPerPage,
      page: page,
      q: `user:${import.meta.env.VITE_USER_NAME} ${searchName.value} in:name`,  
    };

    const { data, headers } = await get<{ items: Repository[] }>('/search/repositories', params);
    repositories.value = data.items;


    updateTotalPages(headers.link);

    currentPage.value = page;
  } catch (error) {
    console.error('Nao conseguiu dar fetch nos repositorios:', error);
  }
};

const handleVisibility = (visibility: GithubVisibility): void => {
  searchVisibility.value = visibility;
  handleSearch();
};

const handleSearch = (page: number = 1): void => {
  if (searchName.value) {
    searchRepositories(page);
  } else {
    loadRepositories(page);
  }
};

export {
  repositories,
  currentPage,
  totalPages,
  loadRepositories,
  searchRepositories,
  searchName,
  searchVisibility,
  handleSearch,
  handleVisibility,
};

export type { GithubVisibility };