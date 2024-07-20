export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Contacts {
  [contactId: string]: Contact;
}
