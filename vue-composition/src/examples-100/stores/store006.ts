import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

/**
 * Pinia Store Example 6
 */

export const useStore6 = defineStore('store6', () => {
  // State
  const items = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const filter = ref('');

  // Getters
  const filteredItems = computed(() => {
    return items.value.filter(item =>
      item.name?.toLowerCase().includes(filter.value.toLowerCase())
    );
  });

  const itemCount = computed(() => items.value.length);
  const hasItems = computed(() => items.value.length > 0);

  // Actions
  async function fetchItems() {
    loading.value = true;
    error.value = null;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      items.value = Array.from({ length: 10 }, (_, i) => ({
        id: `6-${Date.now()}`,
        name: `Item ${i + 1}`,
        value: Math.random() * 100,
      }));
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  function addItem(item: any) {
    items.value.push(item);
  }

  function removeItem(id: string) {
    const index = items.value.findIndex(item => item.id === id);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  function updateItem(id: string, data: any) {
    const index = items.value.findIndex(item => item.id === id);
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...data };
    }
  }

  function setFilter(value: string) {
    filter.value = value;
  }

  function reset() {
    items.value = [];
    loading.value = false;
    error.value = null;
    filter.value = '';
  }

  return {
    items,
    loading,
    error,
    filter,
    filteredItems,
    itemCount,
    hasItems,
    fetchItems,
    addItem,
    removeItem,
    updateItem,
    setFilter,
    reset,
  };
});
