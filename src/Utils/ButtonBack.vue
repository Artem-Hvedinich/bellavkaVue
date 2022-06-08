<template>
  <div class="click">
    <div @click='clickHandler()' class="arrow"/>
  </div>
</template>
<script>
export default {
  name: 'ButtonBack',
  props:['clickHandler']
}

</script>
<style>
.click {
  padding: 15px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 13px;
}

.arrow {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
}</style>