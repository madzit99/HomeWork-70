import { createSlice } from "@reduxjs/toolkit";
import { Contacts } from "../../types";
import { fetchContacts } from "./ContactsThunks";

export interface ContactsState {
  contacts: Contacts | null;
  loading: boolean;
  error: boolean;
}

const initialState: ContactsState = {
  contacts: null,
  loading: false,
  error: false,
};

export const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
    })
  },
});

export const contactsReducer = ContactsSlice.reducer;
