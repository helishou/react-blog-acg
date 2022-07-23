export let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
export let iw = iOS ? window.screen.width : window.innerWidth;
export let ih = iOS ? window.screen.height : window.innerHeight;
