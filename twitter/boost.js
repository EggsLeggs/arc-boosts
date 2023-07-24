function applyStyles() {
    const xLogo =  document.querySelector("header > div > div> div > div > div > h1 > a > div > svg");
  
    if (xLogo && !xLogo.classList.contains('twitter-logo')) {
  
      const twitterLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      twitterLogo.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      twitterLogo.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      twitterLogo.setAttribute('version', '1.1');
      twitterLogo.setAttribute('width', '32'); // Set width to 24 to match the provided logo
      twitterLogo.setAttribute('height', '32'); // Set height to 24 to match the provided logo
      twitterLogo.setAttribute('viewBox', '0 0 256 256'); // Set viewBox to match the provided logo
      twitterLogo.setAttribute('xml:space', 'preserve');
      twitterLogo.classList.add('twitter-logo');
  
      twitterLogo.innerHTML = `
        <!-- Replace this with the actual SVG code for the Twitter logo -->
        <defs></defs>
        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,161,242); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round"></path>
        </g>
      `;
  
      xLogo.parentNode.replaceChild(twitterLogo, xLogo);
      xLogo.remove()
      
    }
  
    const element = document.querySelector("span.text-changed-indicator");
  
    if (!element) {
  
      const spans = document.querySelectorAll("span");
  
      for (let span of spans) {
          if (span.innerText === "© 2023 X Corp.") {
            console.log(span)
            span.className = 'text-changed-indicator';
            span.innerText = "© 2023 Twitter"
          }
      }
    }
  
  }
  const observer = new MutationObserver(applyStyles);
  
  function addObserverIfDesiredNodeAvailable() {
      var composeBox = document.body;
      if(!composeBox) {
          //The node we need does not exist yet.
          //Wait 500ms and try again
          window.setTimeout(addObserverIfDesiredNodeAvailable,500);
          return;
      }
      var config = {childList: true, subtree: true};
      observer.observe(composeBox,config);
  }
  addObserverIfDesiredNodeAvailable();