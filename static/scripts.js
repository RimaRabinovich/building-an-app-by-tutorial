// This file will be loaded after Firebase is initialized
window.addEventListener('load', function () {
  // Get the initialized Firebase auth instance from the window object
  const auth = window.firebaseAuth;

  document.getElementById('sign-out').onclick = function () {
    auth.signOut();
  };

  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: ['profile', 'email'],
        customParameters: {
          prompt: 'select_account'
        }
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        requireDisplayName: true
      }
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Check if the user is signing in for the first time
        const isNewUser = authResult.additionalUserInfo.isNewUser;
        if (!isNewUser) {
          console.log('Existing user signing in');
        }
        return true;  // Redirect after sign in
      },
      signInFailure: function(error) {
        console.error('Sign in error:', error);
      }
    },
    signInFlow: 'popup',
    tosUrl: '/',
    privacyPolicyUrl: '/'
  };

  let ui;
  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in, so display the "sign out" button and login info.
      document.getElementById('sign-out').hidden = false;
      document.getElementById('login-info').hidden = false;
      console.log(`Signed in as ${user.displayName} (${user.email})`);
      user.getIdToken().then(function (token) {
        // Add the token to the browser's cookies. The server will then be
        // able to verify the token against the API.
        // SECURITY NOTE: As cookies can easily be modified, only put the
        // token (which is verified server-side) in a cookie; do not add other
        // user information.
        document.cookie = "token=" + token;
      });
      
      if (ui) {
        ui.delete();
        ui = null;
      }
    } else {
      // User is signed out.
      try {
        if (!ui) {
          ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);
      } catch (error) {
        console.error('Error initializing FirebaseUI:', error);
      }
      // Update the login state indicators.
      document.getElementById('sign-out').hidden = true;
      document.getElementById('login-info').hidden = true;
      // Clear the token cookie.
      document.cookie = "token=";
    }
  }, function (error) {
    console.error('Auth state change error:', error);
    alert('Unable to log in: ' + error)
  });
});