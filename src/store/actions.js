import { bookService } from "../services/bookService";

export const actions = {
  async fetchBooks({ commit }) {
    commit('setBooksLoading', true);

    try {
      const books = await bookService.fetchBooks();

      commit('setBooks', books);
    } catch (err) {
      commit('setBooksLoadingError', err);
    } finally {
      commit('setBooksLoading', false);
    }
  }
}
