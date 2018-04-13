import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  var config = {
    apiKey: "AIzaSyDGEiho6kPwXRKh2QREogsRKIV_JDOBrp8",
    authDomain: "bloc-chat-react-9a325.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-9a325.firebaseio.com",
    projectId: "bloc-chat-react-9a325",
    storageBucket: "bloc-chat-react-9a325.appspot.com",
    messagingSenderId: "1089185158332"
  };
  
  firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
