<template>
  <div class="purchase">
    <header class="purchase__header">
      <h1 class="purchase__title">Варианты покупки</h1>
      <div class="purchase__btnbox">
        <MyButton class="purchase__btn" aria-label="Подробнее">Подробнее</MyButton>
        <MyButton 
          direction="left" 
          class="purchase__left"
          aria-label="left"
        />
        <MyButton 
          direction="right" 
          class="purchase__btn"
          aria-label="right"
        />
      </div>
    </header>
  </div>
</template>

<script setup>
import MyButton from '../UI/MyButton.vue';
</script>

<style lang="scss" scoped>
  .purchase {
    padding-block: 55px;

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      color: $color-title-primary;
      font-size: 42px;
      font-weight: 500;
      line-height: 120%;
    }

    &__btnbox {
      display: flex;
    }

    &__left {
      margin-right: 12px;
      margin-left: 20px;

      transition: all ease-in $transition-duration;
      &:hover {
        background-color: $color-main;
        color: $color-bg
      }
    }

    &__btn {
      transition: all ease-in $transition-duration;
      &:hover {
        background-color: $color-main;
        color: $color-bg
      }
    }
  }
</style>