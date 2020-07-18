function toggleText() {
  // ваш код...
  const button = document.querySelector('button');
            const elem = document.getElementById('text');
            function reveal() {
                elem.hidden = !elem.hidden;
            }
            button.addEventListener("click", reveal);
}
