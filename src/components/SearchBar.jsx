import { useState } from 'react';
import '../styles/SearchBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { PersonSearch, StarRate, StarBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import InvididualData from './InvididualData';
import { searchIndividuals, toggleFavorite } from '../redux/Individuals/individualsSlice';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    dispatch(searchIndividuals(newQuery));
  };

  const { individualsList, individualsFavorites } = useSelector((store) => store.individuals);
  return (
    <div className="search">
      <section className="search__box">
        <PersonSearch style={{ color: '#fff' }} />
        <input className="search__input" type="text" value={query} onChange={handleSearch} placeholder="Search people by name" />
      </section>
      <section className="search__data">
        { individualsList.map((user) => (
          <article key={user.ardaId} className="search__dataUser">
            <a href={`https://torre.ai/${user.username}`}>
              <InvididualData
                imageUrl={user.imageUrl}
                name={user.name}
                professionalHeadline={user.professionalHeadline}
              />
            </a>
            <div className="search__dataFavorite">
              <IconButton onClick={() => dispatch(toggleFavorite(user))}>
                {individualsFavorites.some((favorite) => favorite.ardaId === user.ardaId) ? (
                  <StarRate style={{ color: '#fff' }} />
                ) : (
                  <StarBorder style={{ color: '#fff' }} />
                )}
              </IconButton>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default SearchBar;
