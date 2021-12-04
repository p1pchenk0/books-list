<template>
  <div class="books-list flex row wrap">
    <div v-if="booksLoading">
      Books are loading...
    </div>
    <template v-else-if="booksPresent">
      <div v-if="!filteredBooks.length">
        No books match your search. Try searching something else.
      </div>
      <BookItem
        v-else
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
        class="books-list__item"
      />
    </template>
    <div v-else-if="!booksPresent">
      No books...
    </div>
    <div v-else-if="booksLoadingError">
      Something went wrong, <button @click="fetchBooks">try again</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BookItem from "./BookItem";

export default {
  name: "BooksList",
  components: { BookItem },
  props: {
    titleSearch: String,
    condition: String,
    date: [String, Date]
  },
  computed: {
    ...mapState(['books', 'booksLoading', 'booksLoadingError']),
    booksPresent() {
      return !this.booksLoading && !!this.books.length;
    },
    filteredBooks() {
      const titleSearchPresent = !!this.titleSearch.length;
      const dateSearchPresent = !!this.date;
      const conditionOr = this.condition === 'or';

      if (!titleSearchPresent && !dateSearchPresent) return this.books;

      if (titleSearchPresent && !dateSearchPresent) {
        return this.books.filter(({ title }) => this.compareTitle(title));
      }

      if (!titleSearchPresent && dateSearchPresent) {
        return this.books.filter(({ publishDate }) => this.compareDate(publishDate));
      }

      if (conditionOr) {
        return this.books.filter(({ title, publishDate }) => {
          return this.compareTitle(title) || this.compareDate(publishDate);
        });
      }

      return this.books.filter(({ title, publishDate }) => {
        return this.compareTitle(title) && this.compareDate(publishDate);
      });
    },
  },
  methods: {
    ...mapActions(['fetchBooks']),
    compareTitle(title) {
      return title.toLowerCase().includes(this.titleSearch);
    },
    compareDate(date) {
      return new Date(date).toDateString() === new Date(this.date).toDateString()
    }
  },
  mounted() {
    this.fetchBooks();
  }
}
</script>

<style scoped lang="scss">
.books-list {
  padding: 20px;

  &__item {
    width: calc(33% - 20px);
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
</style>
