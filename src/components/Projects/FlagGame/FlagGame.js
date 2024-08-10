import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
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

const CustomCSS = styled.div`
  #gameContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    margin: 20px;
    justify-content: center;
    color: white;
    flex-direction: column;
    align-items: center;
  }

  #optionsWrapper {
    display: flex;
    width: 400px;
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
`;

const questions = [
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Australia',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Brazil',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
  {
    flag: 'images/Projects/flags/flag.jpg',
    options: ['Germany', 'Australia', 'Brazil', 'Marshall Islands'],
    correct: 'Germany',
  },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

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
    if (currentQuestion < 3) {
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

  const shuffledOptions = shuffleArray([...questions[currentQuestion].options]);

  return (
    <CustomCSS>
      <div id='gameContainer'>
        <img id='img' src={questions[currentQuestion].flag} alt='flag'></img>
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
                    <CheckIcon fontSize='large' sx={{ color: 'lime' }} />
                  )}
                {showAnswer &&
                  selectedOption === option &&
                  selectedOption !== questions[currentQuestion].correct && (
                    <ClearIcon fontSize='large' color='error' />
                  )}
              </div>
              <div
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
          currentQuestion < 3 ? (
            <button
              style={{ transform: 'scale(1.4)' }}
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          ) : (
            <button
              style={{ transform: 'scale(1.4)' }}
              onClick={handleNextQuestion}
            >
              View Results
            </button>
          )
        ) : (
          <button
            style={{ transform: 'scale(1.4)' }}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit
          </button>
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
