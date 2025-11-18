<template>
  <div class="transition-example-10">
    <h3>Transition Example 10</h3>
    <button @click="show = !show">Toggle</button>
    
    <Transition name="fade-10">
      <div v-if="show" class="box">
        <p>Animated content 10</p>
        <p>{{ message }}</p>
      </div>
    </Transition>

    <TransitionGroup name="list-10" tag="ul">
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <button @click="removeItem(item.id)">×</button>
      </li>
    </TransitionGroup>

    <button @click="addItem">Add Item</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);
const message = ref('Hello from transition 10');
const items = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
]);

let nextId = 4;

const addItem = () => {
  items.value.push({
    id: nextId++,
    text: `Item ${nextId - 1}`,
  });
};

const removeItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id);
};
</script>

<style scoped>
.fade-10-enter-active,
.fade-10-leave-active {
  transition: opacity 0.5s ease;
}

.fade-10-enter-from,
.fade-10-leave-to {
  opacity: 0;
}

.list-10-enter-active,
.list-10-leave-active {
  transition: all 0.5s ease;
}

.list-10-enter-from,
.list-10-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.box {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 4px;
}
</style>
