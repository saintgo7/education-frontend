import { Directive } from 'vue';

/**
 * Custom Directive Example 7
 */

export const vDirective7: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '7';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 7: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 7: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 7 unmounted');
  },
};
