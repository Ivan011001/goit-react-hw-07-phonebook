export const selectFilterValue = state => state.filter.toLowerCase();

export const selectContactsItems = state => state.contacts.items;

export const selectContactsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContactsItems(state);
  const filter = selectFilterValue(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
