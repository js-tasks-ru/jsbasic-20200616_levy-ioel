function toggleText() {
  // ваш код...
  const button = document.querySelector('.toggle-text-button');
            const elem = document.querySelector('#text');
            function reveal() {
                // @ts-ignore
                elem.hidden = !elem.hidden;
            }
            button.addEventListener('click', reveal);
}
