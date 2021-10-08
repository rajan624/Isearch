import {
  auth,
  signOut
} from "./Firebase.js";

  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully:)");
        window.location.replace("Authentication.html");
      })
      .catch((error) => {
        alert(error.message);
      });
  });
