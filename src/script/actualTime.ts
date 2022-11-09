import { ref } from '@vue/runtime-core';
// ready to use in multiple files
export const actualTime = ref(new Date());
window.setInterval(callBack, 500);
// doc: https://duckduckgo.com/?t=ffab&q=js+do+something+every+n+second&ia=web
function callBack() {
  actualTime.value = new Date();
}
