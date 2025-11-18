import { Directive } from 'vue';

/**
 * Custom Directive Example 3
 */

export const vDirective3: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '3';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 3: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 3: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 3 unmounted');
  },
};
