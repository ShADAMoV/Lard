<script setup>
import LChipStatus from '../Shared/LChipStatus.vue';
import LChipInn from '../Shared/LChipInn.vue';
import LChipContractType from '../Shared/LChipContractType.vue';
import LTextName from '../Shared/LTextName.vue';
import LTextIdentification from '../Shared/LTextIdentification.vue';
import LText from '../Shared/LText.vue';
</script>

<template>
  <LTextName
    label="Константинопольский Константин Константинович"
  />
  <LChipInn
    label="1234567890"
  />
  <LChipContractType 
    label="ГПХ"
  />
  <LText 
    label="промышленный альпинист"
  />
  <LTextIdentification 
    label="4002 571654"
    region="RU"
  />
  <LText 
    label="г. Санкт-Петербург"
  />
  <LText 
    label="Дата рождения: 23.06.2001"
  />
  <LText 
    label="Возраст: 21 год"
  />
  <LText 
    label="Пол: мужской"
  />
  <LChipStatus
    label="Что-нибудь"
    status="problem"
  />
</template>