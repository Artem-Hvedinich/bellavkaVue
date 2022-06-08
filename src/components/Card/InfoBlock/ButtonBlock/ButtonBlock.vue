<template>
  <div class="button_block middle_margin">
    <button @click="() => alert('No work')" class="button_buy jc_ai_center">
      <ClickImg/>
      <p class="text_wrapper">Купить в 1 клик</p>
    </button>
    <button onClick="() => alert('No work')" class="button_basket jc_ai_center">
    <BasketImg/>
    <p class="text_wrapper">В корзину</p>
    </button>
  </div>
</template>

<script>
import BasketImg from "../../../../common/images/MainFooterImages/BasketImg.vue";
import ClickImg from "../../../../common/images/ClickImg.vue";

export default {
  name: "ButtonBlock",
  components: {
    ClickImg,
    BasketImg
  }
}
</script>
<style>
.button_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  align-items: center;
}

@media screen and (min-width: 660px) {
  .button_block {
    justify-content: space-around;
    flex-direction: row;
    min-height: 0;
  }
}

.button_buy,
.button_basket{
  width: 310px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 25px;
  height: 60px;
  border: 1px solid #282828;
}
.button_basket {
  background: #FFC543;
  border: none;
}
.text_wrapper {
  margin-left: 12px;
}
</style>

