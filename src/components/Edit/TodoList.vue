<template>
  <div class="app-todo__list">
    <label>
      <span>Название Todos:</span>
      <input type="text" :value="todoItem.title">
    </label>
    <hr>
    <h3>Название пунктов todo</h3>
    <div class="checkbox__list">
      <div 
        class="todos__item"
        v-for="item in todoItem.listItem"
        :key="item.id"
      >
        <input type="checkbox" :checked="item.done" id="checkbox">
        <input type="text" :value="item.name">
        <span
          @click="deleteItem($event.target)"
          :data-id="item.id"
        >&times;</span>
      </div>
      <div class="footer__btn">
        <button 
          class="add-new"
          @click="addedNewItem"
        >
          Добавить новый пункт</button>
        <button 
          class="save-new"
          @click="saveTodo"
        >
        Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    todoItem: Array
  },
  data: () => ({
    newItem: null,
  }),
  methods: {
    addedNewItem() {
      this.newItem = { id: Date.now(), name: '', done: false }
      this.todoItem.listItem.push(this.newItem);
    },
    deleteItem(event) {
      this.todoItem.listItem = this.todoItem.listItem.filter((value, index) => value.id != event.dataset.id);
    },
    saveTodo() {
      console.log(this.todoItem);
    }
  }
}
</script>

<style scoped>
  hr {
    margin-top: 25px;
    margin-bottom: 25px;
    border: none;
    border-top: 1px solid #c8c8c881;
  }
  .app-todo__list {
    margin-top: 20px;
    margin-bottom: 100px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .checkbox__list {
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
   
  .checkbox__list .todos__item {
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  
  input {
    padding: 10px 15px;
    border: 1px solid #e1e1e1;
  }

  .todos__item span {
    background: coral;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .footer__btn {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .add-new {
    width: 40%;
    border: 2px solid #5959f1;
    color: #5959f1;
    background: #fff;
    padding: 10px 15px;
    cursor: pointer;
    transition: .3s;
  }

  .add-new:hover {
    background: #5959f1;
    color: #fff;
  }

 .save-new {
    width: 60%;
    border: 2px solid #3ace6b;
    color: #3ace6b;
    background: #fff;
    padding: 10px 15px;
    cursor: pointer;
    transition: .3s;
  }

  .save-new:hover {
    background: #3ace6b;
    color: #fff;
  }


</style>