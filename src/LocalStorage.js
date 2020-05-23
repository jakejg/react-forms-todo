
const getLocalStorage = () => {
    let storedTodos = JSON.parse(localStorage.getItem('items'))
    return storedTodos ? storedTodos.map(todo => todo): [];
}


const setLocalStorage = (todoArray) => {
    localStorage.setItem('items', JSON.stringify(todoArray))
}

export {getLocalStorage, setLocalStorage}
