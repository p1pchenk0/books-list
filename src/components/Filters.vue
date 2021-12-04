<template>
  <div class="filters flex row items-center">
    <input
      type="text"
      placeholder="Search by title..."
      :value="titleSearch"
      @input="onTitleSearchChange"
      class="filters__item"
    >
    <ConditionSwitch
      class="filters__item"
      @change-condition="$emit('change-condition', $event)"
    />
    <div class="filters__item flex items-center">
      <div class="datepicker-placeholder">
        Search by date
      </div>
      <DatePicker :value="date" @input="onDateChange">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="bg-white border px-2 py-1 rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import ConditionSwitch from "./ConditionSwitch";

export default {
  name: "Filters",
  components: { ConditionSwitch, DatePicker },
  data() {
    return {
      titleSearch: '',
      date: null,
    };
  },
  methods: {
    onTitleSearchChange(e) {
      const { value } = e.target;

      if (!value.trim().length) return;

      this.$emit('title-search', value);
    },
    onDateChange(date) {
      this.$emit('date-search', date);
    }
  }
}
</script>

<style scoped lang="scss">
.filters {
  padding: 20px;

  &__item {
    margin-right: 10px;
  }

  .datepicker-placeholder {
    margin-right: 5px;
  }
}
</style>
