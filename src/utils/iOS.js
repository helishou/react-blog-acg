export let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
export let iw = iOS ? window.screen.width : window.innerWidth;
export let ih = iOS ? window.screen.height : window.innerHeight;

// const rootElement = document.querySelector(":root")
// const viewPortH = rootElement.getBoundingClientRect().height;
// const windowH = window.innerHeight;
// const browserUiBarsH = viewPortH - windowH;
// rootElement.style.height = `calc(100vh - ${browserUiBarsH}px)`;
