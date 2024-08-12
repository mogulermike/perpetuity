import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const CustomCSS = styled.div`
  #reviewsContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90%vw;
    margin: 20px;
    justify-content: center;
  }

  #reviewImg {
    height: 300px;
    width: 200px;
  }

  .navClick {
    border: 4px solid transparent;
    height: 300px;
    margin: 5px 5px;
  }
  .navClick:hover {
    position: relative;
    background: #e1e1e1;
    border: 4px solid #ffb703;
  }
`;

const CustomStarIcon = styled(StarIcon)(() => ({
  color: '#EED369',
}));

const CustomStarHalfIcon = styled(StarHalfIcon)(() => ({
  color: '#EED369',
}));

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: '500px',
  bgcolor: '#083045',
  border: '3px solid #EED369',
  borderRadius: '4px',
  p: 4,
  outline: 0,
  color: 'white',
  overflow: 'auto',
  scrollbarWidth: 'thin',
};

export default function Reviews() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CustomCSS>
        <div id='reviewsContainer'>
          <div className='navClick' onClick={handleOpen}>
            <img
              id='reviewImg'
              src='images\Projects\Reviews\severance.jpeg'
              alt='reviewImg'
            ></img>
          </div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={ModalStyle}>
              <Typography id='modal-title' variant='h3' component='h2'>
                Severance
              </Typography>
              <div
                id='rating'
                sx={{ display: 'flex', justifyContent: 'spaceBetween' }}
              >
                <div>
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarHalfIcon />
                </div>
                <Typography
                  id='modal-title'
                  variant='h5'
                  component='h2'
                  sx={{ textAlign: 'right' }}
                >
                  Directed By: Ben Stiller
                </Typography>
              </div>

              <Typography
                id='modal-description'
                sx={{ mt: 2, fontSize: '18px' }}
              >
                Breaking Bad is highly recognized as one of the best shows of
                all time and I completely understand why.
                <br></br>I think the only reason I gave it 4.5/5 stars is
                because of how dark it was and how it made me feel afterwards,
                but that is also why it was such a good show. Whenever something
                can make you feel intense emotions, you know it's doing a good
                job.
                <br></br>
                <br></br>
                Throughout this show I had to remind myself that this was not
                real life. I am often critical of actors when they "act poorly"
                and I get taken out of the show. This never happened in Breaking
                Bad. It was insane how well the actors were paired to their
                characters and how real they made them become.
                <br></br>
                <br></br>I just finished watching Better Call Saul, so my
                rankings might be squeued.
                <br></br>
                1. Gustavo Fring
                <br></br> -- his deadpan face, professionality, and genius one
                me over throughout the show.
                <br></br>
                2. Walter White
                <br></br>-- I was team Walter until almost the very end. The
                show made me believe everything Walter was saying.. and I didn't
                realize what was actually going on until Walter admitted that he
                loved it.
                <br></br>
                3. Saul Goodman
                <br></br> -- A hilarious character that was definitely the
                comedic relief for me.
                <br></br>
                4. Jesse Pinkman
                <br></br>-- The way he was always searching for someone to look
                up to was very endearing. Jesse had the biggest heart out of all
                the characters.
                <br></br>
                5. Hank Schrader
                <br></br>-- At times annoying but defintiley determined. Hated
                how he trusted Walt and then got backstabbed. Felt for him.
                <br></br>
                6. Mike Ehrmantraut
                <br></br>-- Some people live Mike. I am not one of those people.
                Overall no real reason why but he felt invincible.. much like
                Walt but more prominent for some reason.
              </Typography>
            </Box>
          </Modal>
          <div id='one' className='navClick'>
            <NavLink to='/callister' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\callister.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/project hail mary' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\phm.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/artemis' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\artemis.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/martian' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\martian.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/playtest' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\playtest.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/queensgambit' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\queensgambit.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='one' className='navClick'>
            <NavLink to='/hollowknight' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\hollowknight.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/nosedive' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\nosedive.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/bettercallsaul' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\bettercallsaul.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>
          <div id='two' className='navClick'>
            <NavLink to='/ozark' activeClassName='active'>
              <img
                id='reviewImg'
                src='images\Projects\Reviews\ozark.jpg'
                alt='reviewImg'
              ></img>
            </NavLink>
          </div>

          <div className='navClick' onClick={handleOpen}>
            <img
              id='reviewImg'
              src='images\Projects\Reviews\breakingbad.jpg'
              alt='reviewImg'
            ></img>
          </div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={ModalStyle}>
              <Typography id='modal-title' variant='h3' component='h2'>
                Breaking Bad
              </Typography>
              <div
                id='rating'
                sx={{ display: 'flex', justifyContent: 'spaceBetween' }}
              >
                <div>
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarIcon />
                  <CustomStarHalfIcon />
                </div>
                <Typography
                  id='modal-title'
                  variant='h5'
                  component='h2'
                  sx={{ textAlign: 'right' }}
                >
                  Directed By: Vince Gilligan
                </Typography>
              </div>

              <Typography
                id='modal-description'
                sx={{ mt: 2, fontSize: '18px' }}
              >
                Breaking Bad is highly recognized as one of the best shows of
                all time and I completely understand why.
                <br></br>I think the only reason I gave it 4.5/5 stars is
                because of how dark it was and how it made me feel afterwards,
                but that is also why it was such a good show. Whenever something
                can make you feel intense emotions, you know it's doing a good
                job.
                <br></br>
                <br></br>
                Throughout this show I had to remind myself that this was not
                real life. I am often critical of actors when they "act poorly"
                and I get taken out of the show. This never happened in Breaking
                Bad. It was insane how well the actors were paired to their
                characters and how real they made them become.
                <br></br>
                <br></br>I just finished watching Better Call Saul, so my
                rankings might be squeued.
                <br></br>
                1. Gustavo Fring
                <br></br> -- his deadpan face, professionality, and genius one
                me over throughout the show.
                <br></br>
                2. Walter White
                <br></br>-- I was team Walter until almost the very end. The
                show made me believe everything Walter was saying.. and I didn't
                realize what was actually going on until Walter admitted that he
                loved it.
                <br></br>
                3. Saul Goodman
                <br></br> -- A hilarious character that was definitely the
                comedic relief for me.
                <br></br>
                4. Jesse Pinkman
                <br></br>-- The way he was always searching for someone to look
                up to was very endearing. Jesse had the biggest heart out of all
                the characters.
                <br></br>
                5. Hank Schrader
                <br></br>-- At times annoying but defintiley determined. Hated
                how he trusted Walt and then got backstabbed. Felt for him.
                <br></br>
                6. Mike Ehrmantraut
                <br></br>-- Some people live Mike. I am not one of those people.
                Overall no real reason why but he felt invincible.. much like
                Walt but more prominent for some reason.
              </Typography>
            </Box>
          </Modal>
        </div>
      </CustomCSS>
    </div>
  );
}
