import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/IndividualData.scss';
import { IconButton } from '@mui/material';
import { StarRate, StarBorder } from '@mui/icons-material';
import defaultAvatar from '../assets/img/default_avatar_svgrepo.svg';
import { toggleFavorite } from '../redux/Individuals/individualsSlice';

function IndividualData({ user }) {
  const dispatch = useDispatch();
  const { individualsFavorites } = useSelector((store) => store.individuals);
  return (
    <div className="user">
      <div className="user__img">
        <img src={user.imageUrl || defaultAvatar} alt={user.name} />
      </div>
      <div className="user__info">
        <p className="user__infoName">{user.name}</p>
        <p className="user__infoHeadline">{user.professionalHeadline}</p>
      </div>
      <div className="user__favorite">
        <IconButton
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            dispatch(toggleFavorite(user));
          }}
        >
          {individualsFavorites.some((favorite) => favorite.ardaId === user.ardaId) ? (
            <StarRate style={{ color: '#fff' }} />
          ) : (
            <StarBorder style={{ color: '#fff' }} />
          )}
        </IconButton>
      </div>
    </div>
  );
}

IndividualData.propTypes = {
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    professionalHeadline: PropTypes.string.isRequired,
    ardaId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndividualData;
