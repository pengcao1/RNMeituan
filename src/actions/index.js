let nextTodoId = 0
export const addTodo = text =>({
    type: "ADD_FETCHINFO",
    id: nextTodoId++,
    text
})
export const setVisibilityFilter = filter =>({
    type:"SET_VISIBILITY_FILTER",
    filter
})

export const toggleTodo = id =>({
    type:"TOGGLE_FETCHINFO",
    id
})
export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETE: "SHOW_COMPLETE",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}