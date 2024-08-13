import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    textAlign: 'center',
  },
};

// const CustomButton = styled(Button)

const CustomCSS = styled.div`
  #gameContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    color: white;
    flex-direction: column;
    align-items: center;
  }

  #optionsWrapper {
    display: flex;
    width: 300px;
    align-items: center;
    flex-direction: column;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #888;
    height: 40px;
    margin: 5px;
    width: 100%;
    border: 4px solid #bbb;
  }

  .option:hover {
    position: relative;
    border: 4px solid #ffbd35;
  }

  .selected {
    border: 4px solid #ffbd35;
  }

  .responsive {
    height: 30vh;
  }

  .imgContainter {
    height: 300px;
  }

  /* Styles for tablets or smaller screens */
  @media (max-width: 768px) {
    img.responsive {
      max-width: 90%;
      max-height: 100%;
      object-fit: contain;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }

    #optionsWrapper {
      width: 250px;
    }
  }
`;

const countryCodes = {
  af: 'Afghanistan',
  al: 'Albania',
  dz: 'Algeria',
  ao: 'Angola',
  ar: 'Argentina',
  am: 'Armenia',
  au: 'Australia',
  at: 'Austria',
  az: 'Azerbaijan',
  bh: 'Bahrain',
  bd: 'Bangladesh',
  by: 'Belarus',
  be: 'Belgium',
  bz: 'Belize',
  bj: 'Benin',
  bt: 'Bhutan',
  bo: 'Bolivia',
  ba: 'Bosnia and Herzegovina',
  bw: 'Botswana',
  br: 'Brazil',
  bg: 'Bulgaria',
  bf: 'Burkina Faso',
  bi: 'Burundi',
  kh: 'Cambodia',
  cm: 'Cameroon',
  ca: 'Canada',
  cv: 'Cape Verde',
  cf: 'Central African Republic',
  td: 'Chad',
  cl: 'Chile',
  cn: 'China',
  co: 'Colombia',
  km: 'Comoros',
  cg: 'Congo',
  cd: 'Democratic Republic of the Congo',
  cr: 'Costa Rica',
  ci: 'Ivory Coast',
  hr: 'Croatia',
  cu: 'Cuba',
  cy: 'Cyprus',
  cz: 'Czech Republic',
  dk: 'Denmark',
  dj: 'Djibouti',
  dm: 'Dominica',
  do: 'Dominican Republic',
  ec: 'Ecuador',
  eg: 'Egypt',
  sv: 'El Salvador',
  gq: 'Equatorial Guinea',
  er: 'Eritrea',
  np: 'Nepal',
};

function getRandomCountryCodes(codes, count) {
  const keys = Object.keys(codes);
  const selected = [];

  while (selected.length < count) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const countryCode = keys[randomIndex];

    if (!selected.includes(countryCode)) {
      selected.push(countryCode);
    }
  }

  return selected;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomOptions(codes, correctCode, count) {
  const keys = Object.keys(codes);
  const selectedOptions = new Set();

  // Ensure the correct answer is included
  selectedOptions.add(codes[correctCode]);

  while (selectedOptions.size < count) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomCountryName = codes[keys[randomIndex]];

    if (!selectedOptions.has(randomCountryName)) {
      selectedOptions.add(randomCountryName);
    }
  }

  return shuffleArray([...selectedOptions]);
}

const selectedCountryCodes = getRandomCountryCodes(countryCodes, 11);

const questions = selectedCountryCodes.map((code) => {
  const options = getRandomOptions(countryCodes, code, 4);

  return {
    flag: `https://countryflagsapi.netlify.app/flag/${code}.svg`,
    options: options,
    correct: countryCodes[code],
  };
});

console.log('questions', questions);

const FlagGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (!showAnswer) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setModalIsOpen(true);
    }
  };

  const handlePlayAgain = () => {
    setModalIsOpen(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <CustomCSS>
      <div id='gameContainer'>
        <div
          id='imgContainter'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            class='responsive'
            id='img'
            src={questions[currentQuestion].flag}
            alt='flag'
          ></img>
        </div>
        <h3 style={{ marginBottom: '0px' }}>Question: {currentQuestion}/10</h3>

        <h2>What country does this flag represent?</h2>

        <div id='optionsWrapper' style={{ marginBottom: '10px' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <div
              className='optionWrapper'
              key={index}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                marginLeft: '-40px',
              }}
            >
              <div
                className='iconContainer'
                style={{
                  width: '40px', // Fixed width for the icon
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {showAnswer &&
                  option === questions[currentQuestion].correct && (
                    <CheckIcon sx={{ color: 'lime' }} />
                  )}
                {showAnswer &&
                  selectedOption === option &&
                  selectedOption !== questions[currentQuestion].correct && (
                    <ClearIcon sx={{ fontSize: '1.5rem' }} color='error' />
                  )}
              </div>
              <div
                style={{ textAlign: 'center' }}
                className={`option 
                  ${selectedOption === option ? 'selected' : ''} 
                  ${
                    showAnswer && option === questions[currentQuestion].correct
                      ? 'correct'
                      : ''
                  } 
                  ${
                    showAnswer &&
                    selectedOption === option &&
                    selectedOption !== questions[currentQuestion].correct
                      ? 'incorrect'
                      : ''
                  }`}
                onClick={() => handleOptionClick(option)}
              >
                <h3>{option}</h3>
              </div>
            </div>
          ))}
        </div>

        {showAnswer ? (
          currentQuestion < 10 ? (
            <Button onClick={handleNextQuestion} variant='contained'>
              Next Question
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} variant='contained'>
              View Results
            </Button>
          )
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption}
            variant='contained'
          >
            Submit
          </Button>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel='Game Over'
      >
        <h2>Game Over!</h2>
        <p>You got {score} out of 10 correct.</p>
        <button onClick={handlePlayAgain}>Play Again</button>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </CustomCSS>
  );
};

export default FlagGame;
