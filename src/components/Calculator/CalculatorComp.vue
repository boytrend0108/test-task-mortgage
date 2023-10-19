<template>
  <div class="calculator">
    <h3 class="calculator__title">Ипотечный калькулятор</h3>
    <DoubleRange title="Стоимость, млн ₽"/>

    <div class="calculator__type">
      <div class="checkbox">
        <input
          type="checkbox"
          class="checkbox__item"
          name="flet"
          id="flet"
        >
        <label class="checkbox__lable" for="flet">Квартира</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          class="checkbox__item"
          id="apartament"
          name="apartament"
        >
        <label class="checkbox__lable" for="apartament">Апартаменты</label>
      </div>

    </div>

    <SingleRange title="Первоначальный взнос, ₽"/>
    <SingleRange title="Срок выплат"/>
  </div>
</template>

<script setup>
import DoubleRange from './DoubleRange.vue';
import SingleRange from './SingleRange.vue';
</script>

<style  lang="scss" scoped>
.calculator {
  border-radius: 40px;
  border: 1px solid $color-main;
  padding: 40px 35px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 34px;

  &__title {
    color: $color-bg;
    font-size: 14px;
    line-height: 100%;
    border-radius: 10px;
    background: rgba(8, 62, 76, 0.50);
    padding: 10px;
    width: fit-content;
    transition: all ease-in $transition-duration;

    &:hover {
      color: $color-bg;
      background-color: $color-main
    }
  }

  &__type {
    display: flex;
    gap: 20px;
  }
}

.double-range {
  display: flex;
}

.range {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &__fild {
    height: 50px;
    width: 100%;
    background-color: #f1f5f5;
    border-radius: 100px;
    padding-inline: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      width: 20px;
      height: 1px;
      background-color: $color-title-primary;
      position: absolute;
      top: 50%;
      left: 45%;
      transform: rotate(90deg);
    }
  }

  &__double {
    display: flex;
    width: 94%;
  }

  &__track {
    --hover-width: 0;
    margin: 0;
    position: relative;

    &::after {
      content: '';
      width: var(--hover-width);
      height: 3px;
      background-color:white;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__track--right {
    --hover-width: 0;
    margin: 0;
    position: relative;

    &::after {
      content: '';
      width: var(--hover-width);
      height: 3px;
      background-color: $color-bg;
      display: block;
      position: absolute;
      top: 0;
      left: 100%;
      transform: rotate(180deg);
      transform-origin: left;
    }
  }

  &__value {
    color: $color-title-secondary;
    font-size: 16px;
    line-height: 100%; 
  }

  &__title {
    color: $color-title-primary;
    font-size: 14px;
    line-height: 100%;
    display: block;
    align-self: flex-start;
    margin-bottom: 13px;
  }
}

.checkbox {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &__item {
    width: 25px;
    height: 25px;
    margin: 0;
  }

  &__lable {
    color: $color-title-primary;
    font-size: 14px;
    line-height: 100%;
    cursor: pointer;
  }
}

</style>