<template>
    <div>
        <AddTask v-show="showAddTask" @add-task="createTask"/>
        <Tasks @toggle-reminder="toggleTaskReminder" @delete-task="deleteTask" :tasks="tasks" />
    </div>
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Home',
    components: {
        Tasks, 
        AddTask
    },
    data() {
        return {
            tasks: [],
        }
    },
    props:{
        showAddTask: Boolean
    },
    methods: {
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch('api/tasks/'+id, 
        {
          method: 'DELETE'
        });

        this.tasks = this.tasks.filter(
          (task) => task.id !== id 
        )
      }
    },
    async toggleTaskReminder(id) {
      let task = await this.fetchTask(id);

      let res = await fetch('api/tasks/'+id, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...task, reminder: !task.reminder})
      });

      let updateTask = await res.json();

      this.tasks = this.tasks.map(
        (task) => task.id === id ? updateTask : task
      )
    },
    async createTask(task) {
      const res = await fetch('api/tasks', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();

      this.tasks = [...this.tasks, data]
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>

</style>