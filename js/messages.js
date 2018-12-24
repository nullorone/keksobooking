'use strict';

(function () {
  var ESC_KEYCODE = 27;
  // Генерация сообщения об успешной или ошибочной отправки данных формы объявления

  var mainNodeElement = document.querySelector('main');

  var generatesMessageNode = function (status) {
    var messageTemplate = document.querySelector('#' + status);
    var messageElement = messageTemplate.content.cloneNode(true);
    mainNodeElement.appendChild(messageElement);

    var removesMessageNode = function () {
      mainNodeElement.removeChild(mainNodeElement.lastChild);
    };

    var onMainNodeElementClick = function () {
      removesMessageNode();
      mainNodeElement.removeEventListener('click', onMainNodeElementClick);
    };

    var onMessageNodeKeydownEsc = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        removesMessageNode();
        mainNodeElement.removeEventListener('keydown', onMessageNodeKeydownEsc);
      }
    };

    mainNodeElement.addEventListener('click', onMainNodeElementClick);
    mainNodeElement.addEventListener('keydown', onMessageNodeKeydownEsc);
  };

  window.messages = {
    generatesMessageNode: generatesMessageNode
  };
})();

