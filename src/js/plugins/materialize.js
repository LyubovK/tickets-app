import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

const select = document.querySelector('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

const autocomplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker);

export function getDatepickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
