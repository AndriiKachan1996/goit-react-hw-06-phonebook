import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '..//..//redax/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redax/contactSlice';
import * as Yup from 'yup';
import {
  Button,
  Container,
  FormFiled,
  Input,
  Label,
} from './ContactForm.styled';
import { Formik } from 'formik';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = contact => {
    const findContact = name => {
      const finder = name.toLowerCase();
      if (contacts.find(({ name }) => name.toLowerCase() === finder))
        return true;
      else return false;
    };
    if (!findContact(contact.name)) {
      dispatch(addContact({ ...contact, id: nanoid() }));
      return true;
    } else return false;
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Invalid Name'
          )
          .required(),
        number: Yup.string()
          .matches(phoneRegExp, 'Invalid phone number')
          .required(),
      })}
      onSubmit={({ name, number }, { resetForm }) => {
        if (handleSubmit({ name, number })) resetForm();
        else alert(`${name} already in contacts`);
      }}
    >
      {({ errors, values }) => (
        <Container>
          <FormFiled>
            <Label htmlFor="name">
              Name
              <Input
                name="name"
                type="text"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
            </Label>
            <Label htmlFor="number">
              Phone
              <Input
                name="number"
                type="text"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </Label>

            <Button
              type="submit"
              disabled={
                errors.name ||
                errors.number ||
                values.name === '' ||
                values.number === ''
              }
            >
              Add contact
            </Button>
          </FormFiled>
        </Container>
      )}
    </Formik>
  );
};
