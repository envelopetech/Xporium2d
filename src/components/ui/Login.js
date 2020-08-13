import React, { useEffect, useState } from "react";
import Cotter from "cotter"; //  1️⃣  Import Cotter

function Login() {
  const [payload, setpayload] = useState(null);

  //  2️⃣ Initialize and show the form
  useEffect(() => {
    var cotter = new Cotter('dea0e7e0-e9ac-497a-a500-2225bf389a9b'); // 👈 Specify your API KEY ID here
    cotter
      .signInWithOTP() // use .signInWithOTP() to send an OTP
      .showPhoneForm()  // use .showPhoneForm() to send magic link to a phone number 
      .then(response => {
        setpayload(response); // show the response in our state
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/*  3️⃣  Put a <div> that will contain the form */}
      <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
      
      
    </div>
  );
}

export default Login;