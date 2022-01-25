<template>
    <div class="dialog" v-if="show" @click="hideDialog">
      <div class="doalog__content" @click.stop>
        <div class="dialog__title">
          <span>{{ confirmDialogTitle }} [{{ idList }}]</span>
          <span @click="confirmIs(false)">&times;</span>
        </div>
        <div class="dialog__body">
          <button @click="confirmIs(true)">Да</button>
          <button @click="confirmIs(false)">Нет</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AppDialog',
  props: {
    confirmDialogTitle: String,
    idList: Number,
    show: {
      type: Boolean,
      defaul: false
    }
  },
  methods: {
    confirmIs(answer) {
      if(answer) {
        this.$emit('confirmedDialog', false, this.idList);
      } else {
        this.$emit('update:show', false);
      }
    },
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(0 0 0 / 10%);
    display: flex;
  }

  .doalog__content {
    margin: auto;
    background: #fff;
    min-width: 300px;
    min-height: 50px;
    padding: 24px;
    border-radius: 16px;
  }

  .dialog__title {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }

  .dialog__title span:last-child {
    color: red;
    font-size: 24px;
    line-height: 0.7;
    cursor: pointer;
  }
  
  .dialog__body {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .dialog__body button {
    border: none;
    padding: 10px 15px;
    color: #fff;
    background:yellowgreen;
    cursor: pointer;
  }

  .dialog__body button:hover {
    opacity: .7;
  }

  .dialog__body button:first-child {
    background:coral;
  }
</style>