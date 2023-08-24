import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { selectError, selectIsLoading } from 'Redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      {isLoading && !error && <p>Data fetch ...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Layout>
  );
};
