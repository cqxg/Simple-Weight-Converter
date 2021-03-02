import useSound from 'use-sound';

import rock from '../../../../../assets/rock.png';
import paper from '../../../../../assets/paper.png';
import scissors from '../../../../../assets/scissors.png';
import boop from '../../../../../assets/pomoyka.mp3';

import './Options.scss';

const Options = ({
  options,
  playerHand,
  gamesCount,
  compareHands,
  computerHand,
  optionsWrapper,
  computerOptions,
}) => {
  const [play] = useSound(boop);

  const goPlay = (e) => {
    play();
    gamesCount++;
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoise = computerOptions[computerNumber];

    playerHand.current.src = rock;
    computerHand.current.src = rock;
    optionsWrapper.current.classList.add('disabled');

    setTimeout(() => {
      compareHands(e.target.className, computerChoise);

      switch (computerChoise) {
        case 'rock':
          computerHand.current.src = rock;
          break;
        case 'paper':
          computerHand.current.src = paper;
          break;
        case 'scissors':
          computerHand.current.src = scissors;
          break;
        default:
          break;
      }

      switch (e.target.className) {
        case 'rock':
          playerHand.current.src = rock;
          break;
        case 'paper':
          playerHand.current.src = paper;
          break;
        case 'scissors':
          playerHand.current.src = scissors;
          break;
        default:
          break;
      }

      playerHand.current.style.animation = '';
      computerHand.current.style.animation = '';
      optionsWrapper.current.classList.remove('disabled');
    }, 2000);

    playerHand.current.style.animation = 'shakePlayer 2s ease';
    computerHand.current.style.animation = 'shakeComputer 2s ease';
  };

  return (
    <div ref={optionsWrapper} className="options-wrapper">
      <div ref={options} className="options">
        <button onClick={(e) => goPlay(e)} ref={options} className="rock">
          Rock
        </button>
        <button onClick={(e) => goPlay(e)} ref={options} className="scissors">
          Scissors
        </button>
        <button onClick={(e) => goPlay(e)} ref={options} className="paper">
          Paper
        </button>
      </div>
    </div>
  );
};

export default Options;