import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

/**
 * Composable Example 18
 * Reusable composition function
 */

export interface UseExample18Options {
  initialValue?: number;
  step?: number;
  max?: number;
  min?: number;
}

export function useExample18(options: UseExample18Options = {}) {
  const { initialValue = 0, step = 1, max = 100, min = 0 } = options;

  const value = ref(initialValue);
  const history = ref<number[]>([initialValue]);
  const isAtMax = computed(() => value.value >= max);
  const isAtMin = computed(() => value.value <= min);

  const increment = () => {
    if (value.value < max) {
      value.value += step;
      history.value.push(value.value);
    }
  };

  const decrement = () => {
    if (value.value > min) {
      value.value -= step;
      history.value.push(value.value);
    }
  };

  const reset = () => {
    value.value = initialValue;
    history.value = [initialValue];
  };

  const setValue = (newValue: number) => {
    value.value = Math.max(min, Math.min(max, newValue));
    history.value.push(value.value);
  };

  watch(value, (newVal) => {
    console.log(`useExample18: value changed to ${newVal}`);
  });

  onMounted(() => {
    console.log('useExample18 mounted');
  });

  onUnmounted(() => {
    console.log('useExample18 unmounted');
  });

  return {
    value,
    history,
    isAtMax,
    isAtMin,
    increment,
    decrement,
    reset,
    setValue,
  };
}
