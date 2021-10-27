const labels = document.querySelectorAll('label');
//console.log(labels);

labels.forEach(label => {
    label.innerHTML = label.innerText
        //split into an array
        .split('')
        //map to a span element to wrap
        .map((letter, ind) => `<span style="transition-delay:${ind*50}ms">${letter}</span>`)
        //join back together
        .join('')
})

