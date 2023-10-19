<template>
  <div class="offers">
     <div class="offer" v-for="(item, i) in items" :key="i">
        <img src="../../assets/images/offers/offer-mask.png" class="offer__mask">
        <img src='../../assets/images/offers/shadow-bg.png' class="offer__shadow">

        <div 
          class="offer__content"
          :style="{ backgroundImage: `url(${item.bg})`}"
        ></div>

        <p class="offer__title">{{ item.title }}</p>

        <p class="offer__description">
         {{ item.description }}
        </p>

        <MyButton
          direction="right"
          theme="dark"
          class="offer__btn"
        />
     </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import MyButton from '../UI/MyButton.vue';

  const store = useStore();
  const items = computed(() => store.state.variables.items);
</script>

<style scoped lang="scss">
  .offers {
    display: flex;
    gap: 36px;
    align-items: center;
    justify-content: center;
  }

  .offer {
    position: relative;
    width: 420px;
    height: 302px;
    overflow: hidden;
    cursor: pointer;

    &:hover {

      .offer {
        &__content{
        transform: scale(1.1);
      }

      &__title {
        background-color: $color-main;
        color: $color-bg;
      }

      &__btn {
        transform: scale(1.1) rotate(90deg);
      }

      }
    }

    &__mask {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1;
      background-image: url(../../assets/images/offers/offer-mask.png);
    }

    &__shadow {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
    }

 
    &__content {
      height: 100%;
      width: 100%;
      position: absolute;
      transition: transform ease-in $transition-duration;
    }
     
      &__btn {
        position: absolute;
        bottom: 9px;
        right: 9px;
        z-index: 2;
        transform: scale(1);

        transition: all ease-in $transition-duration;
      }

      &__title {
        display: flex;
        padding: 10px 12px;
        box-sizing: border-box;
        align-items: center; 
        position: absolute;
        top: 30px;
        left: 30px;
        height: 54px;
        background-color: $color-bg;
        border-radius: 10px;

        color: $color-title-secondary;
        font-size: 26px;
        font-weight: 500;
        line-height: 130%; 

        transition: all ease-in $transition-duration;
      }

      &__description {
        color: $color-bg;
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 18px 21px 0 0;
        border-top: 1px solid $color-bg;
        max-width: 295px;

        position: absolute;
        bottom: 44px;
        left: 20px;
      }
    }
</style>