<template>
  <Card/>
</template>

<script setup>
import Card from './components/Card/Card.vue'

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #F5F5F5;
  margin: 0 auto;
}

#app {
  font-family: 'Gilroy', sans-serif;
  max-width: 900px;
}

.jc_ai_center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.infinity_scroll_block {
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
}

.infinity_scroll_block::-webkit-scrollbar {
  display: none;
}

.min_margin{
  margin-bottom: 16px;
}
.middle_margin{
  margin-bottom: 32px;
}
</style>

