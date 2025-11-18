import { Directive } from 'vue';

/**
 * Custom Directive Example 1
 */

export const vDirective1: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '1';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 1: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 1: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 1 unmounted');
  },
};
