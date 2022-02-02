import { Link } from 'react-router-dom';

const ButtonGoToNewReservation = () => {
  return (
    <Link to="/my/calendar">
      <button type="button" className="btn btn-dark border-0 px-4">
        Nueva reserva
      </button>
    </Link>
  );
};

export default ButtonGoToNewReservation;