let modal_container = document.querySelector('.modal-container');
let modal_close_button = document.querySelector('.modal-close-button');
let modal_open_searchlogo = document.querySelector('.modal-open-searchlogo');
let modal_open_navbutton_index = document.querySelector('.modal-open-navbutton-index');
let modal_open_search_hotels_button = document.querySelector('.search-hotels-button');


modal_close_button.onclick = function() {
  modal_container.classList.toggle('modal-container-close');
};

modal_open_searchlogo.onclick = function() {
  modal_container.classList.toggle('modal-container-close');
};

modal_open_navbutton_index.onclick = function() {
  modal_container.classList.toggle('modal-container-close');
};

modal_open_search_hotels_button.onclick = function() {
  modal_container.classList.toggle('modal-container-close');
};
