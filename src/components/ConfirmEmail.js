import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { supabase } from '../services/supabaseClient';

const ConfirmEmail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const confirmEmail = async () => {
      // Get the token from the URL
      const token = new URLSearchParams(location.search).get('access_token');

      if (!token) {
        console.error('No token found in URL');
        return;
      }

      const { error } = await supabase.auth.verifyEmail(token);

      if (error) {
        console.error('Email confirmation error:', error.message);
        alert('There was an error confirming your email. Please try again.');
      } else {
        alert('Email confirmed successfully! You can now log in.');
        navigate('/login'); // Redirect to the login page after confirmation
      }
    };

    confirmEmail();
  }, [location, navigate]);

  return <div>Confirming your email...</div>;
};

export default ConfirmEmail;
