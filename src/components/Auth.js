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
};

const Auth = ({ isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Capture username
  const [authError, setAuthError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and sign-in

  // Handle sign-up with username
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Sign up the user with email and password
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setAuthError(null);
      // Handle successful sign in (e.g., redirect or notify the user)
      alert('Signed in successfully!');
    }
  };

  // Listen for auth state change and insert username into the profile once confirmed
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          // User has confirmed their email and signed in
          const { data, error } = await supabase
            .from('profiles')
            .insert([{ id: session.user.id, username }]);

          if (error) {
            console.error('Error inserting profile:', error);
          } else {
            console.log('Profile created successfully');
          }
        }
      }
    );
  }, [username]); // username dependency ensures it updates when the username changes

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <button type='submit'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <button onClick={handleToggle}>
          {isSignUp
            ? 'Already have an account? Sign In'
            : 'Need an account? Sign Up'}
        </button>
      </Box>
    </Modal>
  );
};

export default Auth;
