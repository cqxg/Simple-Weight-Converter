import hand from '../../../../../assets/rock.svg';

import './Hands.scss';

const Hands = ({ playerHand, computerHand }) => {

  return (
    <div className="hands">
      <img
        src={hand}
        ref={playerHand}
        alt="player-hand"
        className="player-hand"
      />
      <img
        src={hand}
        ref={computerHand}
        alt="computer-hand"
        className="computer-hand"
      />
    </div>
  );
};

export default Hands;
