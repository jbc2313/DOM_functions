export function createButton(text: string) {
    const appEl = document.querySelector('#app');
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = text;
    appEl?.append(btnEl);

}
