export const mutations = {
  setBooks(state, books) {
    state.books = books;
  },
  setBooksLoading(state, flag) {
    state.booksLoading = flag;
  },
  setBooksLoadingError(state, error) {
    state.booksLoadingError = error;
  }
}
