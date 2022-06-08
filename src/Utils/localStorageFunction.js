
export function localStorageFunction(cards, howMuch) {
    //чистая функция с принципом инкапсуляции
    //@ts-ignore
    let sessionStore = JSON.parse(sessionStorage.getItem('ViewedStorageArray')) || [];
    sessionStore.unshift({...cards});
    sessionStore.length > howMuch && sessionStore.pop()
    sessionStorage.setItem('ViewedStorageArray', JSON.stringify(sessionStore));
    return sessionStore
}