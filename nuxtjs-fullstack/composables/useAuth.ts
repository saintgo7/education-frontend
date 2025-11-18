import { ref } from 'vue';

export function useExample() {
  const data = ref(null);
  return { data };
}
