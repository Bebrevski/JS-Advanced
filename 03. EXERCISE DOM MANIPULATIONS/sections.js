function create(sentences) {

    for (let i = 0; i < sentences.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<p>${sentences[i]}</p>`;
        div.children[0].style.display = 'none';
        document.getElementById('content').appendChild(div);
        div.addEventListener('click', show);
    }

    function show() {
        event.target.children[0].style.display = 'block';
    }
}