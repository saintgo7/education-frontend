import { Directive } from 'vue';

/**
 * Custom Directive Example 4
 */

export const vDirective4: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '4';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 4: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 4: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 4 unmounted');
  },
};
