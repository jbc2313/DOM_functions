
// need to create a settimeout to add a class to toast to make it visible for 4 seconds.
// then remove the class after the timeout.

export function copy(event: any) {
    //console.log('event target ==', event);

    const toast = document.querySelector("#toaster");
    console.log('toast el =', toast);
    console.log('you clicked the mouse!')
    const text: string = event.target.innerText;
    console.log('text saved =', text);
    navigator.clipboard.writeText(text)
    toast?.classList.add('vis');
    setTimeout(() => {
        toast?.classList.remove('vis'); 
    }, 3000)


}
