import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase('contacts/fetchContacts/pending', (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase('contacts/fetchContacts/fulfilled', (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase('contacts/fetchContacts/rejected', (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default contactsSlice.reducer;