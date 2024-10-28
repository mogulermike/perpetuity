import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import LoginIcon from '@mui/icons-material/Login';
import Face5Icon from '@mui/icons-material/Face5';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const AuthIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAuthClick = (event) => {
    if (isLoggedIn) {
      setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle popover anchor
    } else {
      // Trigger your sign-in logic here (open modal or navigate)
    }
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session?.user);
      const userDisplayName =
        session?.user?.user_metadata?.username || session?.user?.email;
      setUsername(userDisplayName);
      console.log('Session User:', session?.user);
      console.log('Display Username:', userDisplayName);
    };

    checkUserStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session?.user);
        const userDisplayName =
          session?.user?.user_metadata?.username || session?.user?.email;
        setUsername(userDisplayName);
        console.log('Auth State Changed. Display Username:', userDisplayName);
      }
    );
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAnchorEl(null); // Close popover on logout
    setUsername(null);
    console.log('Logged out, AnchorEl:', anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null); // Close popover on close
  };

  return (
    <div
      onClick={handleAuthClick}
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: `2px solid ${isLoggedIn ? 'green' : 'gray'}`,
        cursor: 'pointer',
      }}
    >
      {isLoggedIn ? <Face5Icon /> : <LoginIcon />}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px' }}>
          <Typography sx={{ p: 2 }}>Signed in as {username}</Typography>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </Popover>
    </div>
  );
};

export default AuthIcon;
