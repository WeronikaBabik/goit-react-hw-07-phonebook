export const selectGetContacts = state => state.contacts.items;

export const selectGetFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
