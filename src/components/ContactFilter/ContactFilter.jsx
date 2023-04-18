import { useDispatch, useSelector } from 'react-redux';
import { Container, Input } from './ContactFilter';
import { setFilter } from '..//..//redax/contactSlice';
import { getFilter } from '..//..//redax/selectors';

export const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispath = useDispatch();

  const handleChangeInput = ({ currentTarget }) => {
    dispath(setFilter(currentTarget.value));
  };
  return (
    <Container>
      <Input value={filter} onChange={handleChangeInput}></Input>
    </Container>
  );
};
