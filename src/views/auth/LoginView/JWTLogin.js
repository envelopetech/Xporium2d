import React, { useEffect, useState, useCallback } from 'react';
import Cotter from "cotter"; //  1️⃣  Import Cotter
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Logo from 'src/components/Logo'
import { makeStyles } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import wait from 'src/utils/wait';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cotterContainer: {
    margin: 'auto',
  },
  logo: {
    height: '72px',
  },

  formSection: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,.08), 0 6px 20px 0 rgba(0,0,0,.06)',
    flexDirection: 'column',
    marginTop: '100px',
  },
}));


const JWTLogin = ({ className, ...rest }) => {
  const [payload, setpayload] = useState(null);
  const { login } = useAuth();


  const [shouldRedirect, setShouldRedirect] = useState(false);


  //  2️⃣ Initialize and show the form
  useEffect(() => {
    //const initialise = async () => {
    var cotter = new Cotter('dea0e7e0-e9ac-497a-a500-2225bf389a9b'); // 👈 Specify your API KEY ID here
    cotter
      .signInWithOTP()
      .showPhoneForm()
      .then(response => {
        setpayload(response);       
        fetchMyAPI()        
      })
      .catch(err => console.log(err));
  }, [fetchMyAPI]);
  
  const fetchMyAPI = useCallback(async () => {
    await login()
  }, [])


  return (
    <div className="container">
      <div>
        <div id="cotter-form-container" style={{ width: 300, height: 500 }} />
        {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
      </div>
    </div>
  );
};
JWTLogin.propTypes = {
  className: PropTypes.string,
};
export default JWTLogin;
