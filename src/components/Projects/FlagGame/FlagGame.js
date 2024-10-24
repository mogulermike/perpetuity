import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { supabase } from '../../../services/supabaseClient';
import Auth from '../../Auth'; // Assuming the Auth component is for sign-up and sign-in

// const CustomButton = styled(Button)

const customStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'gray',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  justifyContent: 'center',
};

const CustomCSS = styled.div`
  #gameContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 8px;
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
      margin: 0px 0px 8px 0px;
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

const selectedCountryCodes = getRandomCountryCodes(countryCodes, 10);

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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false); // Track whether to show the form

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

    const isCorrect = selectedOption === questions[currentQuestion].correct;
    setResults([...results, isCorrect]);
  };

  useEffect(() => {
    console.log('results', results);
  }, [results]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user ?? null); // Set the user if they're signed in
    };

    checkUser();

    // Listen for authentication changes (in case user signs in or out)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null); // Update user state based on the session
      }
    );

    return () => {
      authListener.subscription.unsubscribe(); // Cleanup listener on component unmount
    };
  }, []);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setModalIsOpen(true);
    }
  };

  const handlePlayAgain = () => {
    setModalIsOpen(false);
    setCurrentQuestion(0);
    setScore(0);
    setResults([]);
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
            className='responsive'
            id='img'
            src={questions[currentQuestion].flag}
            alt='flag'
          ></img>
        </div>

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
                <h3 style={{ fontSize: '14px' }}>{option}</h3>
              </div>
            </div>
          ))}
        </div>

        {showAnswer ? (
          currentQuestion < 9 ? (
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
        <h3 style={{ fontSize: '14px', marginTop: '10px' }}>
          Question: {currentQuestion + 1}/10
        </h3>
        {!user && (
          <div>
            <p>To track your progress, sign up or sign in:</p>
            {!showAuth ? (
              <button onClick={() => setShowAuth(true)}>
                Sign Up / Sign In
              </button>
            ) : (
              <Auth /> // Show the form when the button is clicked
            )}
          </div>
        )}
      </div>
      <Modal
        keepMounted
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={customStyles}>
          <h2>Game Over!</h2>
          <p>You got {score} out of 10 correct.</p>
          <div id='resultsListContainer'>
            {questions.map((question, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '20px', // Ensure all rows have the same height
                  padding: '8px',
                }}
              >
                {/* Column 1: Checkmark or X */}
                <div style={{ width: '40px', textAlign: 'center' }}>
                  {results[index] ? (
                    <CheckIcon sx={{ color: 'lime' }} />
                  ) : (
                    <ClearIcon sx={{ fontSize: '1.5rem' }} color='error' />
                  )}
                </div>

                {/* Column 2: Flag image */}
                <div style={{ width: '60px', textAlign: 'left' }}>
                  <img
                    src={question.flag}
                    alt='flag'
                    style={{ width: 'auto', height: '30px', margin: '4px' }}
                  />
                </div>

                {/* Column 3: Country name */}
                <div
                  style={{
                    flex: 1,
                    textAlign: 'left',
                    marginLeft: '20px',
                    paddingBottom: '7px',
                  }}
                >
                  <p style={{ margin: 0 }}>{question.correct}</p>
                </div>
              </div>
            ))}
          </div>

          <button style={{ margin: '10px' }} onClick={handlePlayAgain}>
            Play Again
          </button>
          <button onClick={handleCloseModal}>Close</button>
        </Box>
      </Modal>
    </CustomCSS>
  );
};

export default FlagGame;
