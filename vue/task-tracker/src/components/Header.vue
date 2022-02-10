<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" @button-click="this.$emit('toggle-add')"  :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"></Button>
    </header>
</template>
<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        Button
    },
    setup() {
        
    },
    emits: ['toggle-add'],
    computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true;
            }
            return false;
        }
    }
}
</script>


<style scoped>
 header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 20px;
}
</style>