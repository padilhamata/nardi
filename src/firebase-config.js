const Rebase = require("re-base");
const firebase = require("firebase");

const FirebaseConfig = {
  apiKey: "AIzaSyDf_PHf5ykMf95bdN5VEeJBb7Xj74qcX4I",
  authDomain: "xumes-portfolio-64994.firebaseapp.com",
  databaseURL: "https://xumes-portfolio-64994.firebaseio.com",
  projectId: "xumes-portfolio-64994",
  storageBucket: "gs://xumes-portfolio-64994.appspot.com/",
  messagingSenderId: "363627158862",
  appId: "1:363627158862:web:523f45610695d792b6521f"
};
// Initialize Firebase
const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();
export const auth = app.auth();
export default config;
