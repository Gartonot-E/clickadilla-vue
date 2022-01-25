<template>
  <button :class="btnType" />
</template>

<script>
export default {
  name: 'ButtonUI',
  props: {
    btnType: String
  }
}
</script>

<style>

</style>