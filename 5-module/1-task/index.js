function hideSelf() {
  // ваш код...
  const elem = document.querySelector('button');
            elem.onclick = function() {
                elem.hidden = true;
            };
}
