<template>
  <div class="container">
    <div class="content">
      <OfferList/>
      <PurchaseOptions/>
      <OffersBox class="page__offerbox"/>
      <div class="content__bottom">
        <CalculatorComp class="page__calculator"/>
        <DisplayComp/>
      </div>
    </div>
  </div>
</template>

<script setup>
import OfferList from './components/OfferList.vue';
import PurchaseOptions from './components/PurchaseOptions/PurchaseOptions.vue';
import OffersBox from './components/PurchaseOptions/OffersBox.vue';
import CalculatorComp from './components/CalculatorComp.vue';
import DisplayComp from './components/PurchaseOptions/DisplayComp.vue';
</script>

<style scoped lang="scss">
.content {
  &__bottom {
    display: flex;
    gap: 40px;
  }
}
</style>
