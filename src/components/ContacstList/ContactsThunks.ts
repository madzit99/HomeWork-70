import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Contact, Contacts } from "../../types";
import { RootState } from "../../app/store";

export const fetchContacts = createAsyncThunk<
  Contacts,
  void,
  { state: RootState }
>("contacts/fetch", async () => {
  const response = await axiosApi.get<Contacts>("contacts.json");
  return response.data;
});

export const createNewContact = createAsyncThunk<
  void,
  Contact,
  { state: RootState }
>("contacts/new", async (contact) => {
  await axiosApi.post("contacts.json", contact);
});

export const deleteContact = createAsyncThunk<
  void,
  string,
  { state: RootState }
>("contacts/new", async (id:string) => {
  await axiosApi.delete(`contacts/${id}.json`, );
});
