<template>
  <div class="viewed_block">
    <div class="like">
      <LikeImg :like="like" :click-handler="clickHandler"/>
    </div>
    <img class="viewed_img" :src="img" :alt="img"/>
    <div class="info_block">
      <div>
        <div class="price_block">
          <p class="retail">{{ retail }}</p>
          <p class="retail_old">{{ retailOld }}</p>
        </div>
        <p class="name">{{ fullName }}</p>
        <p class="kits">{{ kits }}</p>
      </div>
      <div class='min_margin' @click="()=>alert('sorry')">
        <BasketImg/>
      </div>


    </div>
  </div>
</template>
<script>

import BasketImg from "../../../../common/images/MainFooterImages/BasketImg.vue";
import LikeImg from "../../../../common/images/LikeImg.vue";

export default {
  name: 'OneViewedStorageBlock',
  data: () => ({
    like: false
  }),
  props: {
    fullName: '',
    img: '',
    retail: '',
    retailOld: '',
    kits: ''
  },
  components: {
    BasketImg,
    LikeImg
  },
  methods: {
    clickHandler() {
      this.like = !this.like
      console.log(this.fullName, this.img, this.retail, this.retailOld, this.kits)
    },
  }
}
</script>
<style>
/*.viewed_block {*/
/*  position: relative;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  width: 165px;*/
/*  overflow: hidden;*/
/*  flex: 0 0 auto;*/
/*  margin-left: 16px;*/
/*}*/

/*.viewed_block:first-child {*/
/*  margin: 0;*/
/*}*/

/*.like {*/
/*  position: absolute;*/
/*  right: 8px;*/
/*  top: 8px;*/
/*}*/

/*.viewed_img {*/
/*  width: 100%;*/
/*  height: 245px;*/
/*  border-radius: 6px;*/
/*}*/

/*.info_block {*/
/*  position: relative;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: start;*/
/*  margin-top: 8px;*/
/*  margin-left: 5px;*/
/*}*/

/*.price_block {*/
/*  display: flex;*/
/*  align-items: end;*/
/*}*/

/*.name,*/
/*.retail {*/
/*  font-size: 16px;*/
/*  font-weight: 600;*/
/*  margin-top: 5px;*/
/*}*/

/*.retail {*/
/*  color: #BD9365;*/
/*}*/

/*.retail_old {*/
/*  font-size: 12px;*/
/*  text-decoration-line: line-through;*/
/*  color: #B0AFAB;*/
/*  margin-left: 4px;*/
/*}*/

/*.kits {*/
/*  font-size: 12px;*/
/*  color: #B0AFAB;*/
/*  margin-top: 2px;*/
/*}*/

/*.plus {*/
/*  position: absolute;*/
/*  right: 18px;*/
/*  top: 6px;*/
/*  font-size: 8px;*/
/*  color: #BD9365;*/
/*}*/
</style>
