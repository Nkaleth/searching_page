import { useState } from 'react';
import '../styles/SearchBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { PersonSearch, FavoriteBorder, Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
        <input className="search__input" type="text" value={query} onChange={handleSearch} placeholder="Search people by name" />
      </section>
      <section className="search__data">
        { individualsList.map((user) => (
          <>
            <a key={user.ardaId} href={`https://torre.ai/${user.username}`}>
              <InvididualData
                imageUrl={user.imageUrl}
                name={user.name}
                professionalHeadline={user.professionalHeadline}
              />
            </a>
            <IconButton>
              <FavoriteBorder style={{ color: '#fff' }} />
            </IconButton>
          </>
        ))}
      </section>
    </div>
  );
}

export default SearchBar;
