window.addEventListener('DOMContentLoaded', function() {
  function myPass_1() {
    let password = ['антонмойкраш']; //Пароль
    let input = document.getElementById('input_1').value; //Текстовое поле
    let result = document.getElementById('result_1'); //Результат проверки
    //Если пароль введен неверно или поле пустое
    let assess = false.innerHTMl = ['Ты кто такой. Пшёл!']; //Выводим результат проверки
    //console.log('Мимо');
    for (let i = 0; i < password.length; i++) { //Проверяем на совпадение
      if (password[i] == input) {//Если пароль введен верно
        assess = true.innerHTMl = ['Погнали!']; //Выводим результат проверки
        //console.log('Точно');
        //Переходим на станицу, с задержкой 2 секунды
        setTimeout(() => {location.href = "page_san.html"}, 0);
        break;
      }
    }
    result_1.innerHTML = assess //Результат проверки
  }
  document.getElementById('enter_1').addEventListener('click', myPass_1);
});

window.addEventListener('DOMContentLoaded', function() {
  function myPass_2() {
    let password = ['333']; //Пароль
    let input = document.getElementById('input_2').value; //Текстовое поле
    let result = document.getElementById('result_2'); //Результат проверки
    //Если пароль введен неверно или поле пустое
    let assess = false.innerHTMl = ['Ты кто такой. Пшёл!']; //Выводим результат проверки
    //console.log('Мимо');
    for (let i = 0; i < password.length; i++) { //Проверяем на совпадение
      if (password[i] == input) {//Если пароль введен верно
        assess = true.innerHTMl = ['Погнали!']; //Выводим результат проверки
        //console.log('Точно');
        //Переходим на станицу, с задержкой 2 секунды
        setTimeout(() => {location.href = "page_she.html"}, 0);
        break;
      }
    }
    result_2.innerHTML = assess //Результат проверки
  }
  document.getElementById('enter_2').addEventListener('click', myPass_2);
});

