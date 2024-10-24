import { useState } from 'react';
import { supabase } from '../services/supabaseClient'; // Adjust the path if necessary

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(null);

  // Handle sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
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
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      setAuthError(error.message);
    } else {
      setAuthError(null);
    }
  };

  return (
    <div>
      <h2>Sign Up / Sign In</h2>
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
      <form>
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
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default Auth;
