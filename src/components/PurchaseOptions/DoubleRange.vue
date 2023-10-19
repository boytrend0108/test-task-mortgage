<template>
  <div class="range">
    <p class="range__title">{{ rangeTitle }}</p>

    <div class="range__fild">
      <p class="range__value">{{ startPrice }}</p>
      <p class="range__value">{{ maxPrice }}</p>
    </div>

    <div class="range__double">
      <input
        type="range"
        class="range__track"
        name="start"
        min="0"
        max="2.8"
        step="0.1"
        v-model="startPrice"
        @input="showStartPrice"
        ref="startRange"
      >

      <input 
        type="range" 
        class="range__track range__track--right"
        name="end"
        min="2.8"
        max="5.6"
        step="0.1"
        v-model="maxPrice"
        @input="showMaxPrice"
        ref="maxRange"
      >
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
const props = defineProps({title: String})

const rangeTitle = props.title
const startPrice = ref(0)
const maxPrice = ref(5.6)
const startRange = ref(null)
const maxRange = ref(null)

const showStartPrice = () => {
  const el = startRange.value
  const rangeWidth = window.getComputedStyle(el).width.split('px')[0]
  startRange.value.style.setProperty('--hover-width', (rangeWidth * startPrice.value / 2.8) + 'px')
}

const showMaxPrice = () => {
  const el = maxRange.value
  const rangeWidth = window.getComputedStyle(el).width.split('px')[0]
  let hoverWidth = (rangeWidth * 2) - (rangeWidth * maxPrice.value / 2.8) + 'px'
  maxRange.value.style.setProperty('--hover-width', hoverWidth )
}

</script>

<style  lang="scss" scoped>

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

</style>