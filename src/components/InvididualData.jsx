import PropTypes from 'prop-types';

function InvididualData({ imageUrl, name, professionalHeadline }) {
  return (
    <div className="user">
      <div className="user__img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="user__info">
        <p className="user__infoName">{name}</p>
        <p className="user__infoHeadline">{professionalHeadline}</p>
      </div>
    </div>
  );
}

InvididualData.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  professionalHeadline: PropTypes.string.isRequired,
};

export default InvididualData;
