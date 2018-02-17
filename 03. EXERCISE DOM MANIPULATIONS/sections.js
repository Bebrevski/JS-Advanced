function create(sentences) {

    for (let i = 0; i < sentences.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<p>${sentences[i]}</p>`;
        div.children[0].style.display = 'none';
        div.addEventListener('click', show);

        document.getElementById('content').appendChild(div);
    }


    function show() {
        event.target.children[0].style.display = 'block';
    }
}