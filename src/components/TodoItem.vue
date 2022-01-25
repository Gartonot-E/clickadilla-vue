<template>
  <li>
    <span>{{ item.id }}. {{ item.name }}</span>
    <input type="checkbox" :checked="item.done" disabled>
  </li>
</template>

<script>
export default {
  props: {
   item: {
     type: Object
   },
   idParrent: {
     type: Number
   }
  }
}
</script>

<style>
li {
   display: flex;
   justify-content: space-between;
}

</style>