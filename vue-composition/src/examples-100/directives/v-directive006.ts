import { Directive } from 'vue';

/**
 * Custom Directive Example 6
 */

export const vDirective6: Directive = {
  mounted(el, binding) {
    el.dataset.directive = '6';
    el.style.border = '2px solid blue';
    
    if (binding.value) {
      el.textContent = `Directive 6: ${binding.value}`;
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.textContent = `Directive 6: ${binding.value}`;
    }
  },
  unmounted(el) {
    console.log('Directive 6 unmounted');
  },
};
