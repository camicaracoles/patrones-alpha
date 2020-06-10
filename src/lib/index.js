// aqui exportaras las funciones que necesites

import { templatecrear } from "./view/templatecrear.js";

/* Autentificación con google */

export const loginGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('user', user)
    const mostrarCrear = document.getElementById('root');
    mostrarCrear.innerHTML = templatecrear().innerHTML;
    enviarCorreo()
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('error', errorMessage)
    // ...
  });
}

export const iniciarSesion = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
    const mostrarCrear = document.getElementById('root');
    mostrarCrear.innerHTML = templatecrear().innerHTML;
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;
    if (email.length < 4) {
      alert('Ingrese correo valido.');
      return;
    }
    if (password.length < 4) {
      alert('Ingrese contraseña valida.');
      return;
    }
    // Sign in with email and pass.

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (data) {
      const mostrarCrear = document.getElementById('root');
      mostrarCrear.innerHTML = templatecrear().innerHTML;
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña incorrecta.');
      } else {
        alert(errorMessage);
      }
    });

  }
  document.getElementById('quickstart-sign-in').disabled = true;
}


export const validarRegistro = () => {
  var email = document.getElementById('emailR').value;
  var password = document.getElementById('contraseñaR').value;
  var name = document.getElementById('nombreUsuario').value;
  if (email.length < 4) {
    alert('Ingresar correo valido.');
    return;
  }
  if (password.length < 6) {
    alert('Ingrese contraseñana mínimo 6 caracteres.');
    return;
  }
  if (name.length < 4) {
    alert('Nombre muy corto.')
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data) {
    const mostrarCrear = document.getElementById('root');
    mostrarCrear.innerHTML = templatecrear().innerHTML;
    enviarCorreo()
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es muy débil.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

export const enviarCorreo = () => {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    alert('¡Verificación de correo enviada!');
  });
}

export const restablecerContraseña = () => {
  var email = document.getElementById('email').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function () {
    // Password Reset Email Sent!
    alert('Correo electrónico de restablecimiento de contraseña enviado.');
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
}


