function detectIOSOrSafari() {
  // https://stackoverflow.com/q/9038625/3569421
  if ((navigator.userAgent.indexOf("Chrome") <= 0 && navigator.userAgent.indexOf("Safari") >= 0) ||
      (navigator.userAgent.indexOf("Mac") >= 0 && ("ontouchend" in document)))
      return true;
  switch (navigator.platform) {
      case "iPad Simulator":
      case "iPhone Simulator":
      case "iPod Simulator":
      case "iPad":
      case "iPhone":
      case "iPod":
          return true;
  }
  return false;
}

const isIOSOrSafari = detectIOSOrSafari();

function adjustWindowSize() {
  let widthCss = window.innerWidth,
      heightCss = window.innerHeight;

  if (document.documentElement && ("clientWidth" in document.documentElement)) {
      widthCss = document.documentElement.clientWidth;
      heightCss = document.documentElement.clientHeight;
  }

  if (isIOSOrSafari) {
      let bodyRect = null;

      // Another act out of desperation...
      if (document.documentElement && ("getBoundingClientRect" in document.documentElement))
          bodyRect = document.documentElement.getBoundingClientRect();
      else if (("getBoundingClientRect" in document.body))
          bodyRect = document.body.getBoundingClientRect();

      if (bodyRect) {
          widthCss = bodyRect.right - bodyRect.left;
          heightCss = bodyRect.bottom - bodyRect.top;
      }
  }

  // Rest of the code, where I use widthCss and heightCss to compute my canvas' size
}

window.onresize = adjustWindowSize;