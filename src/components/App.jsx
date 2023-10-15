import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/actions';
import { AppContainer } from './App.styled';
import { GlobalStyle } from './GlobalStyles.styled';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <AppContainer>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <ContactList />
        </Section>
      )}
      <ToastContainer />
      <GlobalStyle />
    </AppContainer>
  );
}
