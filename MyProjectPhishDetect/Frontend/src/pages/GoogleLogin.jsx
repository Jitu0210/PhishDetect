import "react";
import { Oauth2 } from 'googleapis/build/src/apis/oauth2/v2';


const GoogleLogin = userG() 

  const googlelogin = useGoogleLogin({

  })
  return (
    <div className="flex justify-center item-center mt-9">
      <div>
        <button onClick={googlelogin} className="px-4 py-2 bg-blue-500  text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Login with Google
        </button>
      </div>
    </div>
  );

export default GoogleLogin;
