
// Actions
const reducer = (state, action) => {

    if (action.type === "UPDATE_HOME_PAGE") {
        return {
            ...state,
            top_batch: action.payload.top_batch,
            title: action.payload.title,
            img: action.payload.img,
            para: action.payload.para
        }
    }
    if (action.type === "UPDATE_ABOUT_PAGE") {
        return {
            ...state,
            top_batch: action.payload.top_batch,
            title: action.payload.title,
            img: action.payload.img,
            para: action.payload.para
        }
    }

    if (action.type === "GET_DATA") {
        return {
            ...state,
            services: action.payload
        }
    }
    return state
}

export default reducer

