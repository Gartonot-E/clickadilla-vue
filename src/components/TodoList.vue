<template>
  <div class="card__item">
    <div class="card__body">
     <div class="card__title">
       {{todoItem.title}}
       <ButtonUI 
        :btnType="'edit'"
        @click="goEdit(todoItem.id)"
       />
       <ButtonUI 
        :btnType="'delete'"
        @click="deleteTodosList(todoItem.id)"
       />    
     </div>
     <ul class="card__content">
      <TodoItem 
        v-for="item in shortListTodo"
        :key="item.id"
        :item="item"
      />
     </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  components: { TodoItem },
  props: {
    todoItem: {
      type: Object
    }
  },
  data: () => ({
    shortListTodo: null,
  }),
  created() {
    this.shortListTodo = this.todoItem.listItem.slice(0, 3)
  },
  methods: {
    deleteTodosList(id) {
      this.$emit('deleteTodosList', id)
    },
    goEdit(id) {
      
      this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style>
@import url('../assets/css/todoList.css');
</style>