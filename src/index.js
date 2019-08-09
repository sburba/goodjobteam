import "./styles.css";
import "./motivational_sentence.js";
import "./prompt_add_to_homescreen.js";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const sw = 'sw.js';
    navigator.serviceWorker.register(sw).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
