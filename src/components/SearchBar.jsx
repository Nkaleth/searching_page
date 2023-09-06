import '../styles/SearchBar.scss';
import { useSelector } from 'react-redux';

function SearchBar() {
  const { individualsList } = useSelector((store) => store.individuals);
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search people by name" />
      <section className="search__data">
      </section>
    </div>
  );
}

export default SearchBar;
