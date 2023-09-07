import { useState } from 'react';
import '../styles/SearchBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { PersonSearch } from '@mui/icons-material';
import InvididualData from './InvididualData';
import { searchIndividuals } from '../redux/Individuals/individualsSlice';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    dispatch(searchIndividuals(newQuery));
  };

  const { individualsList } = useSelector((store) => store.individuals);
  return (
    <div className="search">
      <section className="search__box">
        <PersonSearch style={{ color: '#fff' }} />
        <input className="search__boxInput" type="text" value={query} onChange={handleSearch} placeholder="Search people by name" />
      </section>
      <section className="search__data">
        { individualsList.map((user) => (
          <article key={user.ardaId} className="search__dataUser">
            <a href={`https://torre.ai/${user.username}`}>
              <InvididualData user={user} />
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default SearchBar;
