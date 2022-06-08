<template>
  <div class="main_link_block">
    <div class="info_link_block">
      <div class="link_block">
        <LikeImg :like="like" :click-handler="clickHandler"/>
        <a :href='cards.url' target='_blank'>
          <ShareImg/>
        </a>
      </div>

      <div class="die_block">
        <div class="best">#лучшее</div>
        <div class="available">{{ cards.status }}</div>
        <div class="cotton">
          <CottonImg/>
          хлопок
        </div>
      </div>
    </div>

    <div class="modal_block">
      <OneLinkBlock v-for="modal in modalState"
                    :modal="modal"/>
    </div>
  </div>
</template>

<script>
import LikeImg from "../../../common/images/LikeImg.vue";
import ShareImg from "../../../common/images/LinkImages/ShareImg.vue";
import CottonImg from "../../../common/images/LinkImages/CottonImg.vue";
import OneLinkBlock from "./OneLinkBlock/OneLinkBlock.vue";
import VideoClipImg from "../../../common/images/LinkImages/VideoClipImg.vue";
import ReviewsImg from "../../../common/images/LinkImages/ReviewsImg.vue";
import Question from "../../../common/images/LinkImages/Question.vue";

export default {
  name: 'LinkBlock',
  props: {
    cards: {
      type: Object,
      default: () => {return {}}
    },
  },
  data: () => ({
    like: false,
    modalState: [
      {
        title: 'Смотреть видеообзоры',
        // count: this.cards.videosCount,
        count: 2222,
        // icon: <VideoClipImg/>,
        link: '/404'
      },
      {
        title: 'Отзывы покупателей',
        // count: this.cards.reviewsCount,
        count: 4,
        // icon: <ReviewsImg/>,
        link: '/comments',
      },
      {
        title: 'Вопросы по модели',
        // count: this.cards.questionsCount,
        count: 1,
        // icon: Question,
        link: '/404',
      }
    ]
  }),
  components: {
    LikeImg,
    ShareImg,
    CottonImg,
    OneLinkBlock
  },
  methods: {
    clickHandler() {
      this.like = !this.like
    },
  }
}

</script>

<style>
.main_link_block {
  margin: 8px 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Gilroy', sans-serif;
}

.info_link_block {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}

.link_block {
  width: 70px;
  display: flex;
  justify-content: space-between;
}

.die_block {
  display: flex;
}

.best,
.available,
.cotton {
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 8px;
  border-radius: 5px;
  font-size: 12px;
}

.best {
  background-color: #8B123B;
}

.available {
  background-color: #BD9365;
  margin: 0 8px;

}

.cotton {
  background-color: #282828;
}


.modal_block {
  display: flex;
  justify-content: space-between;
}
</style>