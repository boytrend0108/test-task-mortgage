<template>
  <div class="offers" id="target">
     <div 
        class="offer" 
        :class="`offer--${i}`"
        v-for="(item, i) in items" 
        :key="i"
        :id="`offer_${i}`"
        ref="offer"
     >
        <img 
          src="@/assets/images/offers/offer-mask.png" 
          class="offer__img offer__img--mask"
          alt="Ипотека от 4,3%"
        >
        <img 
          src='@/assets/images/offers/shadow-bg.png' 
          class="offer__img offer__img--shadow"
          alt="Рассрочка 0%"
        >
        <img 
          :src="`/test-task-mortgage/${item.bg}`"  
          class="offer__img offer__img--content"
          alt="Покупка в Trade-in"
        >

        <p class="offer__title">{{ item.title }}</p>

        <p class="offer__description">
         {{ item.description }}
        </p>

        <MyButton
          direction="right"
          theme="dark"
          class="offer__btn"
          aria-label="play"
        />
     </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import MyButton from '../UI/MyButton.vue';

  const offer = ref(null)
  const store = useStore();
  const items = computed(() => store.state.variables.items);

  const scrollAnim = () => {

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          offer.value[1].style.transform = 'translateY(0)'
          offer.value[1].style.opacity = '1'
          offer.value[2].style.transform = 'translateY(0)'
          offer.value[2].style.transitionDelay = '0.2s'
          offer.value[2].style.opacity = '1'
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector("#target");
    observer.observe(target);
  }

  onMounted(() => {
    scrollAnim()
  })
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

  &--1,
  &--2 {
    transform: translateY(100px);
    opacity: 0.5;
    transition: all ease-in-out 0.7s;
  }

  &:hover {

    .offer {
      &__content {
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

  &__img {
    width: 420px;
    height: 302px;
    position: absolute;

    &--mask {
      width: 420px;
      height: 302px;
      z-index: 1;
    }

    &--shadow {
      width: 420px;
      height: 302px;
      z-index: 2;
    }

    &--content {
      width: 420px;
      height: 302px;
      transition: transform ease-in $transition-duration;
    }
  }

  &__btn {
    position: absolute;
    bottom: 4px;
    right: 4px;
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