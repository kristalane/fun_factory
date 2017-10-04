import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"

var config = {
   apiKey: "AIzaSyC1JsWynTBuTCGUEkAkZH083ZElVkjqAw8",
   authDomain: "factory-5cd78.firebaseapp.com",
   databaseURL: "https://factory-5cd78.firebaseio.com",
   projectId: "factory-5cd78",
   storageBucket: "factory-5cd78.appspot.com",
   messagingSenderId: "998191501794"
 };

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
