import '../styles/SearchBar.scss';
import { useSelector } from 'react-redux';
import InvididualData from './InvididualData';

function SearchBar() {
  const { individualsList } = useSelector((store) => store.individuals);
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search people by name" />
      <section className="search__data">
        { individualsList.map((user) => (
          <InvididualData
            key={user.ardaId}
            imageUrl={user.imageUrl}
            name={user.name}
            professionalHeadline={user.professionalHeadline}
          />
        ))}
      </section>
    </div>
  );
}

export default SearchBar;
