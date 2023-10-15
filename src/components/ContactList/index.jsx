import ContactFilter from 'components/ContactFilter';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { StyledList } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ContactFilter />
      {contacts.length > 0 ? (
        <StyledList>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </StyledList>
      ) : (
        <p>Sorry, no contacts found...</p>
      )}
    </>
  );
}
