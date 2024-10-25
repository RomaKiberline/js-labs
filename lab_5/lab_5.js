function showContent(contentNumber, button) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(`content-${contentNumber}`).classList.add('active');

    const buttons = document.querySelectorAll('.box--btn > div');
    buttons.forEach(btn => {
        btn.classList.remove('active'); 
        btn.style.background = '#555'; 
        const text = btn.querySelector('p');
        text.style.color = '#FC0'; 
    });

    button.classList.add('active'); 
    button.style.background = '#FFF'; 
    const activeText = button.querySelector('p');
    activeText.style.color = '#000'; 
}
