import { useSelector } from 'react-redux';

import { Container, UL } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redax/selectors';

export const ContactList = () => {
  const contactsList = useSelector(getFilteredContacts);
  return (
    contactsList.length !== 0 && (
      <Container>
        <UL>
          {contactsList.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </UL>
      </Container>
    )
  );
};
