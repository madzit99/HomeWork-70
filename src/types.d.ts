export interface Contact {
  name: string;
  phone: number;
  email: string;
  photo: string;
}

export interface Contacts {
    [contactId: string]: Contact;
}