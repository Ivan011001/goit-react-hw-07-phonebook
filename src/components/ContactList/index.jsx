import ContactFilter from 'components/ContactFilter';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts, selectContactsLoading } from 'redux/selectors';
import { Audio } from 'react-loader-spinner';

import { StyledList } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsLoading);

  return (
    <>
      <ContactFilter />
      {isLoading && <Audio height="70" width="70" />}
      {contacts.length > 0 && (
        <StyledList>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}
