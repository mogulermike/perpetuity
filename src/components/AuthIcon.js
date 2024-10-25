import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import LoginIcon from '@mui/icons-material/Login';
import Face5Icon from '@mui/icons-material/Face5';

const AuthIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleAuthClick = async () => {
    if (isLoggedIn) {
      // Log out the user
      await supabase.auth.signOut();
    } else {
      // Trigger your sign-in logic here (open modal or navigate)
    }
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession(); // Check session
      setIsLoggedIn(!!session?.user); // Set to true if user is logged in, otherwise false
    };

    checkUserStatus(); // Call the function to check login status

    // Listen for changes in the auth state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session?.user); // Update state based on auth event
      }
    );

    // Cleanup listener on unmount
    return () => {
      authListener.unsubscribe();
    };
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div
      onClick={handleAuthClick}
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: `2px solid ${isLoggedIn ? 'green' : 'gray'}`, // Green when logged in, gray when not
      }}
    >
      {isLoggedIn ? (
        <Face5Icon /> // Use an icon for logged-in state (user icon)
      ) : (
        <span>
          <LoginIcon />
        </span> // Use an icon for logged-out state (lock icon)
      )}
    </div>
  );
};

export default AuthIcon;
