import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const LS_FAV_KEY = 'rfk'
interface GithubState {
    fovourites:string[]
}

const initialState: GithubState = {
    fovourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name:'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>){
            state.fovourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.fovourites))
        },
        removeFavourite(state, action: PayloadAction<string>){
            state.fovourites = state.fovourites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.fovourites))
        },
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
