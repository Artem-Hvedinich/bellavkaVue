<template>
  <div class="info_block">
    <div class="min_margin">
      <h1 class="full_name">{{ cards.fullName }}</h1>
      <span class="kit" v-for="(kit,index) in cards.kits">
        <span v-if="index===0">{{ kit.value }}, </span>
        <span v-else>{{ kit.value }}</span>
      </span>
    </div>

    <div class="price_block middle_margin">
      <div class="price_block_number">
        <p class="retail">{{ cards.price.retail }}₽</p>
        <p class="retail_old">{{ cards.price.retailOld }}₽</p>
      </div>
      <div @click="clickHandler(1)" class="jc_ai_center">
        <p class="more">Подробнее</p>
        <MoreImg/>
      </div>
    </div>

    <div v-if="modalPrice" style="border: 1px solid">
      <b>TEST MODAL OF PRICE</b><br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    </div>

    <div class="size_wrapper_text min_margin">
      <h2>Размеры: </h2>
      <p @click="clickHandler(2)" class="table_size">Таблица размеров</p>
    </div>

    <div v-if="modalSize" style="border: 1px solid">
      <b>TEST MODAL OF SIZE</b><br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    </div>

    <div class="infinity_scroll_block middle_margin">
      <div v-for="size in cards.sizes" :key="size.id" class="wrapper">
        {{ size.value }}
      </div>
    </div>

    <h2 class="min_margin">Рост: </h2>
    <div class="infinity_scroll_block middle_margin">
      <div v-for="height in cards.heights" :key="height.id" class="wrapper">
        {{ height.value }}
      </div>
    </div>

    <ButtonBlock/>

    <div style="margin-bottom: 50px">
      <h2 style="margin-bottom: 8px">Цвета:</h2>
      <div>
        <img :class="cards.isActive" class="colors" :src="cards.photos.slice(0, 1).toString()"
             :alt="cards.photos.slice(0, 1).toString()"/>
      </div>
    </div>

    <div>

    </div>

  </div>
</template>

<script>
import MoreImg from "../../../common/images/MoreImg.vue";
import ButtonBlock from "./ButtonBlock/ButtonBlock.vue";

export default {
  name: 'InfoBlock',
  data: () => ({
    modalPrice: false,
    modalSize: false
  }),
  props: {
    cards: {},
  },
  components: {
    MoreImg,
    ButtonBlock,
  },
  methods: {
    clickHandler(modal) {
      if (modal === 1) this.modalPrice = !this.modalPrice
      if (modal === 2) this.modalSize = !this.modalSize
    },
  }
}
</script>

<style>
.info_block {
  display: flex;
  flex-direction: column;
  font-family: 'Gilroy', sans-serif;
  margin: 17px;
}

.full_name {
  font-weight: bold;
  font-size: 16px;
}

.kit {
  font-size: 16px;
  color: #B0AFAB;
}

.price_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #BD9365;
}

.price_block_number {
  display: flex;
  align-items: end;
}

.retail {
  font-weight: 600;
  font-size: 24px;
}

.retail_old {
  font-size: 14px;
  text-decoration-line: line-through;
  color: #B0AFAB;
  margin-left: 4px;
}

.more {
  margin-right: 5px;
  cursor: pointer;
}

.size_wrapper_text {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.table_size {
  font-size: 14px;
  text-decoration-line: underline;
  color: #C49E74;
  cursor: pointer;
}

.colors {
  border-radius: 11px;
  padding: 2px;
  height: 110px
}

h2 {
  font-weight: 500;
  font-size: 20px;
}

.border_wrapper {
  border: 1px solid #282828
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 40px;
  border: 1px solid #EEEEEE;
  border-radius: 7px;
  flex: 0 0 auto;
  margin: 0 8px;
}

.wrapper:first-child,
.wrapper:last-child {
  margin: 0;
}
</style>


