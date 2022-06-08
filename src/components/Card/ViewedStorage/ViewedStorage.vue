<template>
  <div class="large_margin">
    <h2 class="title">Вы недавно смотрели</h2>
    <div class="infinity_scroll_block">
      <OneViewedStorageBlock v-for="(store,i) in sessionStore"
                             :key="store.retail + i"
                             :fullName="store.name"
                             :img="store.img"
                             :retail="store.retail"
                             :retailOld="store.retailOld"
                             :kits="store.kits"/>
    </div>
  </div>
</template>

<script>
import OneViewedStorageBlock from "./OneViewedStorageBlock/OneViewedStorageBlock.vue";

export default {
  name: 'ViewedStorage',
  props: {
    sessionStore: {}
  },
  components:{
    OneViewedStorageBlock
  }
}
</script>
<style>
.scroll_block {
  display: flex;
  overflow-x: auto;
}

.title {
  margin: 16px;
  color: #BD9365;
}
</style>
