export const addTodo = (data) => {
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: 'REMOVE_TODO',
        id: id
    }
}

export const removeTodo = () => {
    return{
        type: 'CLEAR_TODO'
    }
}