<template>
  <div class="component-23">
    <h3>{{ title }}</h3>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

interface Props {
  title?: string;
  initialCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Component 23',
  initialCount: 0,
});

const emit = defineEmits<{
  (e: 'update', value: number): void;
  (e: 'change', value: number): void;
}>();

const count = ref(props.initialCount);
const doubleCount = computed(() => count.value * 2);

const increment = () => {
  count.value++;
  emit('update', count.value);
};

const decrement = () => {
  count.value--;
  emit('update', count.value);
};

watch(count, (newVal) => {
  emit('change', newVal);
});

onMounted(() => {
  console.log('Component 23 mounted');
});
</script>

<style scoped>
.component-23 {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
