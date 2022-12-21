export function createButton(text: string) {
    const bodyEl = document.querySelector('body');
    const btnEl = document.createElement('button');
    btnEl.innerText = text;
    bodyEl?.append(btnEl);

}
