import {
  currentPage,
  totalPages,
  loadRepositories,
  searchName,
  searchRepositories
} from "./useLoadRepositories";

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    if(searchName.value === ''){
      loadRepositories(currentPage.value - 1);
    }
    else{
      searchRepositories(currentPage.value - 1);
    }
  }
};

const goToNextPage = () => {

  if (currentPage.value < totalPages.value) {
    if(searchName.value === ''){
      loadRepositories(currentPage.value + 1);
    }
    else{
      searchRepositories(currentPage.value + 1);
    }
  }
};

export { goToPreviousPage, goToNextPage };
