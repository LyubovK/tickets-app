import '../css/style.css';
import './plugins';
import locations from './store/locations';
// import formUI from './views/form';

// document.addEventListener('DOMContentLoaded', () => {
//   initApp();

//   async function initApp() {
//     await locations.init();
//     formUI.setautocompleteData(locations.shortCitiesList);
//   }
// });

locations.init().then((res) => {
  console.log(res);
  console.log(locations);
});
