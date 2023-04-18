import { ContactList } from 'components/ContactsList/ContactsList.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Container, Title } from './App.styled.js';
import { ContactFilter } from '../ContactFilter/ContactFilter.jsx';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <ContactFilter />

      <ContactList />
    </Container>
  );
};
