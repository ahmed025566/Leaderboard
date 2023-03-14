/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/Functions.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "renderData": () => (/* binding */ renderData)
/* harmony export */ });
const Name = document.querySelector('.Name');
const score = document.querySelector('.Score');
const scoresDiv = document.querySelector('.scores');
let scores = [];

if (localStorage.getItem('scores')) {
  scores = JSON.parse(localStorage.getItem('scores'));
}

let counter = 1;
const addScore = () => {
  if (score.value !== '' && Name.value !== '') {
    const player = {
      Name: Name.value,
      scor: score.value,
      id: Date.now(),
      counter,
    };
    scores.push(player);
    score.value = '';
    Name.value = '';
    counter += 1;
  }
};
const renderData = () => {
  scoresDiv.innerHTML = '';
  scores.forEach((score) => {
    const gamer = document.createElement('div');
    gamer.className = 'gamer';
    if (score.counter % 2 === 0) {
      gamer.classList.add('gray');
    }
    gamer.append(document.createTextNode(`${score.Name} : ${score.scor}`));
    scoresDiv.append(gamer);
  });
};
const addToLocalStorage = () => {
  localStorage.setItem('scores', JSON.stringify(scores));
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWSxJQUFJLFdBQVc7QUFDdkU7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvRnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5OYW1lJyk7XG5jb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY29yZScpO1xuY29uc3Qgc2NvcmVzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlcycpO1xubGV0IHNjb3JlcyA9IFtdO1xuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpKSB7XG4gIHNjb3JlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpKTtcbn1cblxubGV0IGNvdW50ZXIgPSAxO1xuZXhwb3J0IGNvbnN0IGFkZFNjb3JlID0gKCkgPT4ge1xuICBpZiAoc2NvcmUudmFsdWUgIT09ICcnICYmIE5hbWUudmFsdWUgIT09ICcnKSB7XG4gICAgY29uc3QgcGxheWVyID0ge1xuICAgICAgTmFtZTogTmFtZS52YWx1ZSxcbiAgICAgIHNjb3I6IHNjb3JlLnZhbHVlLFxuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICBjb3VudGVyLFxuICAgIH07XG4gICAgc2NvcmVzLnB1c2gocGxheWVyKTtcbiAgICBzY29yZS52YWx1ZSA9ICcnO1xuICAgIE5hbWUudmFsdWUgPSAnJztcbiAgICBjb3VudGVyICs9IDE7XG4gIH1cbn07XG5leHBvcnQgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgc2NvcmVzRGl2LmlubmVySFRNTCA9ICcnO1xuICBzY29yZXMuZm9yRWFjaCgoc2NvcmUpID0+IHtcbiAgICBjb25zdCBnYW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVyLmNsYXNzTmFtZSA9ICdnYW1lcic7XG4gICAgaWYgKHNjb3JlLmNvdW50ZXIgJSAyID09PSAwKSB7XG4gICAgICBnYW1lci5jbGFzc0xpc3QuYWRkKCdncmF5Jyk7XG4gICAgfVxuICAgIGdhbWVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtzY29yZS5OYW1lfSA6ICR7c2NvcmUuc2Nvcn1gKSk7XG4gICAgc2NvcmVzRGl2LmFwcGVuZChnYW1lcik7XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBhZGRUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlcycsIEpTT04uc3RyaW5naWZ5KHNjb3JlcykpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=