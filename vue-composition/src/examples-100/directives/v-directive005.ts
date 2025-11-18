import { Directive } from 'vue';

/**
 * Custom Directive Example 5
 */

export const vDirective5: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '5';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 5: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 5: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 5 unmounted');
  },
};
