<template>
   <button 
     class="button"
     :class="setClass"
     ref="button"
   >
    <slot></slot>
   </button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  direction: String,
  theme: String,
})

const button = ref(null);

const setClass = computed(() => {
  if (!button.value) return

  if (props.theme === 'dark') {
    setButtonStyle();
  }

  if (props.direction === 'left') return 'button--left'
  if (props.direction === 'right') return 'button--right'
  return false
});

const setButtonStyle = () => {
  button.value.style.backgroundColor = '#083e4c'
  button.value.style.setProperty('--bg-color', 'white')
}

onMounted(() => {
  // console.log(button)
})

</script>

<style scoped lang="scss">
  .button {
    font-size: 16px;
    font-weight: 500;
    line-height: 100%; 

    height: 58px;
    width: fit-content;
    border-radius: 100px;
    border: 1px solid $color-main;
    padding-inline: 25px;

    --bg-color: $color-main;

    &--left {
      position: relative;
      width: 58px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        left: 16px;
        width: 0;
        height: 0;
        display: block;
        border: 7px solid transparent;
        border-right-color: var(--bg-color);
      }
    }

    &--right {
      position: relative;
      width: 58px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        left: 26px;
        width: 0;
        height: 0;
        display: block;
        border: 7px solid transparent;
        border-left-color: var(--bg-color);
      }
    }
  }
</style>