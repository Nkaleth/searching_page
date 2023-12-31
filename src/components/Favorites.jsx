import { useSelector } from 'react-redux';
import '../styles/Favorites.scss';
import defaultAvatar from '../assets/img/default_avatar_svgrepo.svg';

function Favorites() {
  const { individualsFavorites } = useSelector((store) => store.individuals);
  return (
    <div className="favorites">
      {individualsFavorites.length === 0 ? (
        <p className="favorites__empty">FAVORITES EMPTY</p>
      ) : (
        individualsFavorites.map((user) => (
          <article key={user.ardaId} className="favorites__dataUser">
            <a href={`https://torre.ai/${user.username}`}>
              <div className="favorites__img">
                <img src={user.imageUrl || defaultAvatar} alt={user.name} />
              </div>
              <div className="favorites__info">
                <p className="favorites__infoName">{user.name}</p>
                <p className="favorites__infoHeadline">{user.professionalHeadline}</p>
              </div>
            </a>
          </article>
        ))
      )}
    </div>
  );
}

export default Favorites;
