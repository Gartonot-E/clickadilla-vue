<template>
  <div class="edit__title">
    <h2>Редактирование списка №{{ $route.params.id }}</h2>
    <button
      @click="deleteTodoItem"
    >Удалить заметку</button>
  </div>  
  <AppTodos 
    v-for="todo in editTodos"
    :key="todo.id"
    :todoItem="todo"
  />
  <AppDialog
    :confirmDialogTitle="confirmDialogTitle"
    @confirmedDialog="confirmedDialog"
    v-model:show="show"
    :idList="idList"
  />
</template>

<script>
import AppTodos from '@/components/Edit/TodoList'

export default {
  name: 'Edit',
  components: { AppTodos },
  props: {
    todos: Array  
  },
  data: () => ({
    editTodos: null,
    show: false,
    confirmDialogTitle: "Удалить всю заметку?",
    idList: null,
  }),
  created() {
    this.editTodos = this.todos.filter((value, index) => value.id == this.$route.params.id);
  },
  methods: {
    deleteTodoItem() {
      this.editTodos.forEach(edit => {
        this.show = true;
        this.idList = edit.id;
       
      });
    },
    confirmedDialog(dialogState, id) {
      this.show = dialogState;
      this.$emit('deleteItem', id);
      this.$router.push('/');
    }
  }
}
</script>

<style>
.edit__title {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.edit__title button {
  align-self: flex-end;
  background: transparent;
  border: 2px solid coral;
  padding: 8px 15px;
  color: coral;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}

.edit__title button:hover {
  color: #fff;
  background: coral;
}
</style>