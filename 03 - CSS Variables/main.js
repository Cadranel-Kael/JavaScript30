
const inputs = document.querySelectorAll('.controls input');

function updateStyle(input) {
    const suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value+suffix);
}

for (const input of inputs) {
    input.addEventListener('input', (e) => updateStyle(e.currentTarget));
}