<template>
  <div id="app">
    <Filters
      @title-search="onTitleSearch"
      @change-condition="onConditionChange"
      @date-search="onDateSearch"
    />
    <BooksList
      :title-search="titleSearch"
      :condition="condition"
      :date="dateSearch"
    />
  </div>
</template>

<script>
import Filters from "./components/Filters";
import BooksList from "./components/BooksList";

export default {
  name: 'App',
  components: {
    BooksList,
    Filters
  },
  data() {
    return {
      titleSearch: '',
      condition: 'or',
      dateSearch: null,
    };
  },
  methods: {
    onTitleSearch(e) {
      this.titleSearch = e;
    },
    onConditionChange(e) {
      this.condition = e;
    },
    onDateSearch(e) {
      this.dateSearch = e;
    }
  }
}
</script>

<style>
</style>
