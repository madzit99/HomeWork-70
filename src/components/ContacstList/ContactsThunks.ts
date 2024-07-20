import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Contacts } from "../../types";
import { RootState } from "../../app/store";

export const fetchContacts = createAsyncThunk<
  Contacts,
  void,
  { state: RootState }
>("contacts/fetch", async () => { 
  const response = await axiosApi.get<Contacts>("contacts.json");
  return response.data;
});
