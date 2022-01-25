<template>
    <h2>Список задач</h2>
    <div class="card">
      <div class="card__list">
        <TodoList 
          v-for="todo in todos"
          :key="todo.id"
          :todoItem="todo"
          @deleteTodosList="deleteTodosList"
        />
      </div>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: { TodoList },
  name: 'Home',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteTodosList(idList) {
      this.$emit('deleteTodoId', idList)
    }
  }
}
</script>

<style scoped>

.card__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: dense;
  gap: 16px;
  margin-top: 20px;
}

.card__item {
  background: #fff;
  min-height: 50px;
  box-shadow: 0 8px 16px rgb( 0 0 0 / 10% );
  padding: 24px;
  border-radius: 16px;
}

</style>
