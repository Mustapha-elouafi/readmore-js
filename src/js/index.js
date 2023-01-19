import "../sass/readmore.scss";

import Readmore from './readmore'
  
window.addEventListener("DOMContentLoaded", (event) => {
    let readmore = new Readmore();
    readmore.render();
});