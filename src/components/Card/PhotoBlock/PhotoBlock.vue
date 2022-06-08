<template>
  <div class="photo_block">
    <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="dimensions"
        :pagination="{ clickable: true }">
      <swiper-slide v-for="(photo,index) in cards.photos" :key="photo">
        <img v-if="index!==1" class="photo" loading="lazy" :key="photo" :src='photo' :alt="photo"/>
        <video :key="index" v-else :src="photo" preload="none" autoPlay muted loop/>
      </swiper-slide>
    </swiper>
    <div v-if="cards.salePercent" class="sale"> -{{ cards.salePercent }}%</div>
    <ButtonBack v-bind:clickHandler="clickHandler"/>
    <SearchImg/>
  </div>
</template>

<script>
import ButtonBack from "../../../Utils/ButtonBack.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Pagination} from "swiper";
import SearchImg from '../../../common/images/SearchImg.vue'

export default {
  data: () => {
    return {
      dimensions: window.innerWidth / 250,
    }
  },
  props: {
    cards: {
      type: Object,
      default: () => {
        return {}
      }
    },

  },
  components: {
    ButtonBack,
    Swiper,
    SwiperSlide,
    SearchImg
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    clickHandler: () => {
      alert('Sorry, this button in progress')
    },
  },
  created() {
    this.cards.photos = [this.cards.photos[0],
      this.cards.videos[0]['540p'],
      ...this.cards.photos.splice(1, 11)]
  }
}

</script>

<style scoped>
.photo_block {
  position: relative;
  height: 100%;
  width: auto;
}

.swiper {
  height: 375px;
}

.sale {
  position: absolute;
  z-index: 1;
  bottom: 26px;
  left: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 1.5rem;
  border-radius: 10px;
  background-color: #8B123B;
  color: white;
}

img {
  height: 376px;
}

video {
  height: 445px;
  overflow: hidden;
  margin: 0 auto;
}

.swiper-pagination-current:before {
  content: "0";
  background-color: #8bd978;
}
</style>
