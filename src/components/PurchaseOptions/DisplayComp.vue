
<template>
  <div class="display" id="display">
    <div class="display__box" ref="display">
      <p class="display__subtitle">Узнайте о других 
        <span class="display__subtitle--link">интересных предложениях</span>
      </p>
      <h3 class="display__title">Ипотека 0.1%</h3>
      <div class="display__options">
        <div class="display__item">
          <p class="display__item-title">Ежемесячный платёж</p>
          <p class="display__item-value">12 591 ₽</p>
        </div>
        <div class="display__item">
          <p class="display__item-title">Ставка</p>
          <p class="display__item-value">0.1%</p>
        </div>
        <div class="display__item">
          <p class="display__item-title">Сумма кредита</p>
          <p class="display__item-value">4 465 050 ₽</p>
        </div>
        <div class="display__item">
          <p class="display__item-title">Срок кредита</p>
          <p class="display__item-value">5 лет</p>
        </div>
      </div>

    </div>
    <p class="display__text">
      Приведенные расчеты носят предварительный характер. Окончательный расчет суммы кредита и размер ежемесячного платежа производится банком после предоставления оценки платежеспособности клиента.
    </p>
    <MyButton 
      theme="dark" 
      class="display__btn"
      aria-label="Подать заявку на точный расчёт"
    >
      Подать заявку на точный расчёт
    </MyButton>
  </div>
</template>

<script setup>
import { onMounted, ref} from 'vue';
import MyButton from '../UI/MyButton.vue';
import scrollAnim from '../../utils/scrollAnim';

const display = ref(null)
const anim = () => {
  display.value.style.transform = 'translateY(0)'
  display.value.style.opacity = '1'
}

onMounted(() => {
  scrollAnim(anim, 'display')
})
</script>

<style scoped lang="scss">
  .display {

    &__box {
      background-image: url(../../assets/images/display/display-bg.webp);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      padding: 60px 40px 37px;
      box-sizing: border-box;
      border-radius: 20px;
      position: relative;
      margin-bottom: 25px;
      transform: translateY(50px);
      opacity: 0.5;
      transition: all ease-in-out 0.7s;
    }

    &__subtitle {
      color: $color-main;
      font-size: 14px;
      line-height: 100%;
      width: fit-content;
      position: absolute;
      top: 14px;
      right: 5px;

      &--link {
        color: $color-main;
        @include hover(color, $color-main-hover);
        cursor: pointer;
      }
    }

    &__title {
      color: $color-main;
      font-size: 74px;
      line-height: 110%;
      background-color: $color-bg;
      padding: 15px;
      width: fit-content;
      border-radius: 16px;
      margin-bottom: 50px;
    }

    &__options {
      display: flex;
      gap: 70px;
    }

    &__item-title {
      color:rgba(255, 255, 255, 0.70);
      font-size: 14px;
      line-height: 100%;
      margin-bottom: 14px;
    }

    &__item-value {
      color: $color-bg;
      font-size: 30px;
      line-height: 120%;
    }

    &__text {
      margin-bottom: 40px;
      color:#778478;
      font-size: 14px;
      line-height: 140%;
    }

    &__btn {
      color: $color-bg;
      @include hover(background-color, $color-main-hover);
    }
  }
</style>
