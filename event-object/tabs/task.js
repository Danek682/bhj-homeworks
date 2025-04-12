let tabs = document.querySelectorAll('.tabs');
for (let i = 0; i < tabs.length; i++) {
    let container = tabs[i];
    let tab = container.querySelectorAll('.tab');
    let tabContent = container.querySelectorAll('.tab__content');

    for (let j = 0; j < tab.length; j++) {
        tab[j].addEventListener('click', () => {

            for (let k = 0; k < tab.length; k++) {
                tab[k].classList.remove('tab_active');
                tabContent[k].classList.remove('tab__content_active');
            }

            tab[j].classList.add('tab_active');
            tabContent[j].classList.add('tab__content_active')
        })
    }
}