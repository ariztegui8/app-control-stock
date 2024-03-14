import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
    name: 'valores',
    initialState: {
        nombre: 'Jorge',
        apellido: 'Ariztegui'
    },
    reducers: {
        guardarnombre: (state, action) => {
            state.nombre = action.payload
        },
        guardarApellido:(state, action) => {
            state.apellido = action.payload
        },
    }
})

export const {guardarnombre, guardarApellido} = Slice.actions;