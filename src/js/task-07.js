const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

const getMagic = () => {
 text.style.fontSize = `${input.value}px`
};

input.addEventListener('input', getMagic);
