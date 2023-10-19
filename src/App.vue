<template>
  <div class="container">
    <OfferList/>
    <PurchaseOptions/>
    <OffersBox class="page__offerbox"/>
    <CalculatorComp class="page__calculator"/>
  </div>
</template>

<script setup>
import OfferList from './components/OfferList.vue';
import PurchaseOptions from './components/PurchaseOptions/PurchaseOptions.vue';
import OffersBox from './components/PurchaseOptions/OffersBox.vue';
import CalculatorComp from './components/CalculatorComp.vue';
</script>

<style scoped>
</style>
