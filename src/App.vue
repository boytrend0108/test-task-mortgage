<template>
  <div class="container">
    <div class="content">
      <OfferList/>
      <PurchaseOptions/>
      <OffersBox class="page__offerbox"/>
      <div class="content__bottom">
        <CalculatorComp class="content__calculator"/>
        <DisplayComp class="content__display"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import OfferList from './components/OfferList.vue';
import PurchaseOptions from './components/PurchaseOptions/PurchaseOptions.vue';
import OffersBox from './components/PurchaseOptions/OffersBox.vue';
import CalculatorComp from './components/Calculator/CalculatorComp.vue';
import DisplayComp from './components/PurchaseOptions/DisplayComp.vue';
</script>

<style scoped lang="scss">
.content {
  &__bottom {
    display: grid;
    column-gap: 40px;
    grid-template-columns: repeat(12, 1fr);
  }

  &__calculator {
    grid-column: 1/5;
  }

  &__display {
    grid-column: -1/-9;
  }
}
</style>
