const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
    let elem = event.target.parentElement;
    if(elem === wrapper || elem.parentElement === wrapper) {
        wrapper.classList.toggle('active');
    }
});