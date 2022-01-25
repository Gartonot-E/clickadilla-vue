<template>
  <Header />
  <main>
    <div class="main__wrapper">
      <div class="container">
        <router-view 
          :todos="todos"
          @deleteTodoId="deleteTodoId"
          @deleteItem="deleteItem"
        />
        <AppDialog
          :confirmDialogTitle="confirmDialogTitle"
          @confirmedDialog="confirmedDialog"
          v-model:show="show"
          :idList="idList"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: { Header },
  data: () => ({
    confirmDialogTitle: 'Удалить список?',
    show: false,
    idList: null,
    todos: [
      { 
        id: 1, 
        title: "Задачи на сегодня",
        listItem: [
          { id: 1, name: 'Покормить котов', done: true },
          { id: 2, name: 'Покушать', done: false },
          { id: 3, name: 'Сделать тестовое задание', done: false },
          { id: 4, name: 'Сходить за хлебом', done: false }
        ]
      },
      { 
        id: 2, 
        title: "Задачи на завтра",
        listItem: [
          { id: 1, name: 'Выучить роутинг', done: false },
          { id: 2, name: 'Вынести мусор', done: false }
        ]
      }
    ]
  }),
  methods: {
    deleteTodoId(id){
      this.show = true;
      this.idList = id;
    },
    confirmedDialog(data, id) {
      this.show = data;
      this.todos = this.todos.filter((value, index) => value.id !== id);
    },
    deleteItem(dataID) {
      this.todos = this.todos.filter((value, index) => value.id !== dataID);
    }
  },
}
</script>


<style>
@import url('./assets/css/base.css');

</style>
