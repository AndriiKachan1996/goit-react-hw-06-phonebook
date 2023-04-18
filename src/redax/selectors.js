export const getContacts = state => state.phonebook.contacts;
export const getFilteredContacts = state => {
  const filter = state.phonebook.filter.toLocaleLowerCase();

  return state.phonebook.contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
};
export const getFilter = state => state.phonebook.filter;
