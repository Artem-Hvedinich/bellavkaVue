<template>
  <PhotoBlock :cards="cards"/>
  <LinkBlock :cards="cards"/>
  <InfoBlock :cards="cards"/>
  <ViewedStorage :sessionStorage="sessionStorage"/>
</template>

<script>

import PhotoBlock from './PhotoBlock/PhotoBlock.vue'
import LinkBlock from "./LinkBlock/LinkBlock.vue";
import InfoBlock from "./InfoBlock/InfoBlock.vue";
import ViewedStorage from "./ViewedStorage/ViewedStorage.vue";
import {localStorageFunction} from "../../Utils/localStorageFunction";
import {API} from "../../api/api";

export default {
  name: 'Cards',
  data: () => ({
    cards: {}
  }),
  created: async function () {
    API.productCard().then((response) => {
          console.log(response)
          this.cards = response
        }
    )
  },
  components: {
    PhotoBlock,
    LinkBlock,
    InfoBlock,
    ViewedStorage
  },
}
</script>

<style>

</style>