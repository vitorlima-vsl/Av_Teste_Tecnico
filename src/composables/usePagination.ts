import {
  currentPage,
  totalPages,
  loadRepositories,
  searchName,
  searchRepositories
} from "./useLoadRepositories";

const isFirstPage     = () => currentPage.value <= 1;
const isLastPage      = () => currentPage.value >= totalPages.value;
const isSearchActive  = () => searchName.value !== '';

const loadPage = (page: number) => {
  if (isSearchActive()) {
    searchRepositories(page);
    return;
  } 
  loadRepositories(page);
};

const goToPreviousPage = () => {
  if (isFirstPage()) return;
  loadPage(currentPage.value - 1);
};

const goToNextPage = () => {
  if (isLastPage()) return;
  loadPage(currentPage.value + 1);
};

export { goToPreviousPage, goToNextPage };