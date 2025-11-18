import { Directive } from 'vue';

/**
 * Custom Directive Example 9
 */

export const vDirective9: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '9';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 9: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 9: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 9 unmounted');
  },
};
