export function copy(event: any) {
    //console.log('event target ==', event);
    console.log('you clicked the mouse!')
    const text: string = event.target.innerText;
    console.log('text saved =', text);
    navigator.clipboard.writeText(text)


}
