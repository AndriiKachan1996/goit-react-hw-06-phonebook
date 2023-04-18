import PropTypes from 'prop-types';

import { Btn, Li, Name, Num } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contactSlice';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const heandleClickDell = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Li>
        <Name>{name} : </Name>
        <Num>{number}</Num>
        <Btn
          type="button"
          onClick={() => {
            heandleClickDell(id);
          }}
        >
          delete
        </Btn>
      </Li>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
