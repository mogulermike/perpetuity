import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Basic styles for the modal content
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const Auth = ({ isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Capture username
  const [authError, setAuthError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and sign-in
  const [hasInitializedStats, setHasInitializedStats] = useState(false); // Track initialization

  // Function to handle user stats initialization
  const initializeUserStats = async (userId) => {
    // Check if user_stats already exists for this user
    const { data: existingStats, error: statsError } = await supabase
      .from('User_Stats')
      .select('*')
      .eq('user_id', userId);

    if (statsError) {
      console.error('Error fetching user stats:', statsError);
      return false; // Indicate failure
    }

    // If no stats exist, create a new entry
    if (existingStats.length === 0) {
      const { error: insertError } = await supabase
        .from('User_Stats')
        .insert([{ user_id: userId, total_correct: 0, total_questions: 0 }]);

      if (insertError) {
        console.error('Error creating user stats:', insertError);
        return false; // Indicate failure
      } else {
        console.log('User stats initialized successfully');
      }
    }
    return true; // Indicate success
  };

  useEffect(() => {
    // Only add the listener if it hasn't been set up already
    if (!window.authListener) {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (event === 'SIGNED_IN' && session) {
            const success = await initializeUserStats(session.user.id);
            if (success) {
              console.log('User stats are ready to be fetched.');
              setHasInitializedStats(true); // Track initialization to avoid repeats
            }
          }
        }
      );
      // Store listener globally to prevent duplicate setup
      window.authListener = authListener;
    }

    return () => {
      // Clean up listener when the component unmounts
      if (window.authListener) {
        window.authListener.subscription?.unsubscribe();
        delete window.authListener;
      }
    };
  }, [hasInitializedStats]);

  // Handle sign-up with username
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Sign up the user with email, password, and username
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username, // Include the username here
        },
      },
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthError(null);
      alert('Check your email for the confirmation link!');
    }
  };

  // Handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();

    // Sign in the user with email and password
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthError(null);
      // Handle successful sign-in (e.g., redirect or notify the user)
      alert('Signed in successfully!');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('Modal closed');
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp); // Toggle between sign-up and sign-in
    setAuthError(null); // Clear any previous errors
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby='auth-modal-title'
      aria-describedby='auth-modal-description'
    >
      <Box sx={modalStyle}>
        <h2 id='auth-modal-title'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {authError && <p style={{ color: 'red' }}>{authError}</p>}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '300px', // Limit the width of the form
            margin: '0 auto', // Center the form horizontally if needed
          }}
          onSubmit={isSignUp ? handleSignUp : handleSignIn} // Handle form submission
        >
          {isSignUp && (
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            style={{
              width: '120px', // Set desired width
              padding: '4px', // Adjust padding for a smaller button size
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: '4px', // Optional for rounded corners
              marginTop: '10px',
            }}
            type='submit'
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button
          style={{
            width: '180px', // Set desired width
            padding: '4px', // Adjust padding for a smaller button size
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '4px', // Optional for rounded corners
            marginTop: '10px',
          }}
          onClick={handleToggle}
        >
          {isSignUp
            ? 'Already have an account? Sign In'
            : 'Need an account? Sign Up'}
        </button>
      </Box>
    </Modal>
  );
};

export default Auth;
