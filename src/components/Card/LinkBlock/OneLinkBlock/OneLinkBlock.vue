<template>
  <div class="modal">
    <div class="header_block">
      <div class="icon_count_block">
        <p class="count">+{{ modal.count }}</p>
      </div>
      <RightArrow/>
    </div>
    <div>{{ modal.title }}</div>
  </div>
</template>

<script>
import RightArrow from "../../../../common/images/RightArrow.vue";

export default {
  name: 'OneLinkBlock',
  props: ['modal'],
  components: {
    RightArrow,
  },
}
</script>

<style>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 80px;
  height: 86px;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  padding: 8px 12px;
  overflow-wrap: anywhere;
  color: #BD9365;
}

.modal:first-child {
  margin-right: 8px;
}

.modal:last-child {
  margin-left: 8px;
}

.icon_count_block {
  display: flex;
  align-items: end;
}

.header_block {
  display: flex;
  justify-content: space-between;
}

.count {
  margin-left: 6px;
}

</style>