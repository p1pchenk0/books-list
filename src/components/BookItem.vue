<template>
  <div class="book-item">
    <div class="book-item__title bold">
      {{ book.title }}
    </div>
    <div class="book-item__description">
      {{ book.description }}
    </div>
    <div class="book-item__publish-date">
      {{ formattedDate }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: {
      title: String,
      description: String,
      publishDate: Date
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.book.publishDate).toDateString();
    }
  }
}
</script>

<style scoped lang="scss">
.book-item {
  padding: 20px;
  background-color: #DAEFB3;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
  border-radius: 15px;

  &__title {
    font-size: 1.25rem;
  }

  &__description {
    font-size: 1rem;
  }

  &__title, &__description {
    margin-bottom: 15px;
  }
}
</style>
