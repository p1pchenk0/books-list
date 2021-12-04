<template>
  <div class="condition-switch flex row items-center">
    <div
      v-for="item in items"
      :key="item.value"
      class="condition-switch__item pointer"
      :class="{ 'bold condition-switch__item--selected': item.value === selected }"
    >
      <div
        class="condition-switch__item-label"
        @click="selectCondition(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionSwitch",
  data() {
    return {
      items: [
        { label: 'OR', value: 'or' },
        { label: 'AND', value: 'and' }
      ],
      selected: 'or'
    }
  },
  methods: {
    selectCondition(item) {
      this.selected = item.value;
      this.$emit('change-condition', item.value);
    }
  }
}
</script>

<style scoped lang="scss">
.condition-switch {
  &__item {
    margin-right: 5px;

    &--selected {
      color: white;
      padding: 5px;
      background-color: black;
      border-radius: 5px;
    }
  }
}
</style>
