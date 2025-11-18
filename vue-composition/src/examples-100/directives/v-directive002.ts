import { Directive } from 'vue';

/**
 * Custom Directive Example 2
 */

export const vDirective2: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '2';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 2: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 2: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 2 unmounted');
  },
};
