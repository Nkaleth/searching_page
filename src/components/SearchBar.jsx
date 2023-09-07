import { useState, useEffect, useRef } from 'react';
import '../styles/SearchBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { PersonSearch } from '@mui/icons-material';
import IndividualData from './IndividualData';
import { searchIndividuals } from '../redux/Individuals/individualsSlice';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [showData, setShowData] = useState(false);
  const dispatch = useDispatch();
  const searchBoxRef = useRef(null);
  const searchDataRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)
          && searchDataRef.current && !searchDataRef.current.contains(event.target)) {
        setShowData(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setShowData(true);
    dispatch(searchIndividuals(newQuery));
  };

  const { individualsList } = useSelector((store) => store.individuals);
  return (
    <div className="search">
      <section className="search__box" ref={searchBoxRef}>
        <PersonSearch style={{ color: '#fff' }} />
        <input className="search__boxInput" type="text" value={query} onChange={handleSearch} placeholder="Search people by name" />
      </section>
      {showData && (
        <section className="search__data" ref={searchDataRef}>
          { individualsList.map((user) => (
            <article key={user.ardaId} className="search__dataUser">
              <a href={`https://torre.ai/${user.username}`}>
                <IndividualData user={user} />
              </a>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

export default SearchBar;
