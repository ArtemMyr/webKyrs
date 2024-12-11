const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.replace('../index.html');
});

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let main = document.querySelector('.main');
    main.remove();
    render_curse();
})
function render_curse() {
    const questions = [
        {
            question: "Что такое JSX?",
            options: ["Просто JavaScript", "Синтаксическое расширение JavaScript для описания пользовательского интерфейса", "Язык программирования, похожий на XML", "Библиотека для работы с DOM"],
            answer: 1
        },
        {
            question: "Какая основная функция компонента в React?",
            options: ["Обрабатывать HTTP-запросы", "Отображать часть пользовательского интерфейса", "Управлять состоянием приложения", "Выполнять асинхронные операции"],
            answer: 1
        },
        {
            question: "Какой оператор используется для сравнения строгого равенства в JavaScript?",
            options: ["=", "==", "===", "!=="],
            answer: 2
        },
        {
            question: "Что такое `null` в JavaScript?",
            options: ["Отсутствие значения", "Ложное значение", "Определенное значение", "Числовое значение"],
            answer: 0
        },
        {
            question: "Что такое `undefined` в JavaScript?",
            options: ["Отсутствие значения", "Ложное значение", "Определенное значение", "Строковое значение"],
            answer: 0
        },
        {
            question: "Как объявить функцию в JavaScript?",
            options: ["function myFunction() {}", "let myFunction = () => {}", "const myFunction = function() {}", "Все варианты верны"],
            answer: 3
        },
        {
            question: "Что делает метод `push()` массива?",
            options: ["Добавляет элемент в начало массива", "Добавляет элемент в конец массива", "Удаляет элемент из массива", "Сортирует массив"],
            answer: 1
        },
        {
            question: "Что делает метод `pop()` массива?",
            options: ["Добавляет элемент в начало массива", "Добавляет элемент в конец массива", "Удаляет последний элемент массива", "Сортирует массив"],
            answer: 2
        },
        {
            question: "Как получить доступ к элементу DOM по его ID?",
            options: ["`document.getElementById('id')`", "`document.querySelector('#id')`", "Оба варианта верны", "Ни один из вариантов не верен"],
            answer: 2
        },
        {
            question: "Что такое DOM?",
            options: ["Объектная модель документа", "Язык разметки документов", "Стиль оформления веб-страницы", "Язык программирования"],
            answer: 0
        },
        {
            question: "Что делает метод `addEventListener()`?",
            options: ["Удаляет обработчик событий", "Добавляет обработчик событий", "Вызывает обработчик событий", "Ничего не делает"],
            answer: 1
        },
        {
            question: "Что такое JSON?",
            options: ["Язык программирования", "Формат обмена данными", "База данных", "Стиль CSS"],
            answer: 1
        },
        {
            question: "Как объявить переменную с областью видимости функции?",
            options: ["`var x = 10;`", "`let x = 10;`", "`const x = 10;`", "Все варианты верны"],
            answer: 3
        },
        {
            question: "Как объявить глобальную переменную в JavaScript?",
            options: ["`var x = 10;`", "`let x = 10;`", "Оба варианта верны", "Ни один из вариантов не верен"],
            answer: 0
        },
        {
            question: "Что такое `this` в JavaScript?",
            options: ["Глобальный объект", "Текущий объект", "Родительский объект", "Функция"],
            answer: 1
        },
        {
            question: "Что делает метод `filter()` массива?",
            options: ["Фильтровать элементы массива", "Преобразовывать элементы массива", "Сортировать элементы массива", "Суммировать элементы массива"],
            answer: 0
        },
        {
            question: "Что делает метод `map()` массива?",
            options: ["Фильтровать элементы массива", "Преобразовывать элементы массива", "Сортировать элементы массива", "Суммировать элементы массива"],
            answer: 1
        },
        {
            question: "Что делает метод `reduce()` массива?",
            options: ["Фильтровать элементы массива", "Преобразовывать элементы массива", "Сортировать элементы массива", "Суммировать или преобразовывать элементы массива в одно значение"],
            answer: 3
        },
        {
            question: "Что такое асинхронное программирование?",
            options: ["Выполнение кода построчно", "Выполнение кода без блокировки других задач", "Выполнение кода только после завершения предыдущей задачи", "Выполнение кода в отдельном потоке"],
            answer: 1
        },
        {
            question: "Что такое Promise в JavaScript?",
            options: ["Объект, представляющий асинхронную операцию", "Тип данных", "Функция", "Объект, хранящий данные"],
            answer: 0
        },
        {
            question: "Как создать новый объект в JavaScript?",
            options: ["`let obj = {};`", "`let obj = new Object();`", "Оба варианта верны", "Ни один из вариантов не верен"],
            answer: 2
        },
        {
            question: "Что такое замыкание (closure)?",
            options: ["Функция внутри функции", "Функция, имеющая доступ к переменным из своего лексического окружения", "Функция, не возвращающая значение", "Функция, вызывающая ошибку"],
            answer: 1
        },
        {
            question: "Что такое прототипное наследование в JavaScript?",
            options: ["Наследование от классов", "Наследование от объектов", "Наследование от прототипов", "Наследование от функций"],
            answer: 2
        },
        {
            question: "Как проверить, является ли переменная числом?",
            options: ["`typeof x === 'number'`", "`Number.isFinite(x)`", "Оба варианта верны", "Ни один из вариантов не верен"],
            answer: 2
        }
    ];


    const form = document.createElement('form');
    let html = `<h3>Тест по JavaScript (20 вопросов)</h3>`;

    questions.forEach((q, index) => {
        html += `<p>${q.question}</p>`;
        q.options.forEach((option, i) => {
            html += `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label><br>`;
        });
    });

    html += `<p><input type="button" id="calc" value="Подсчитать результаты"><input type="reset" value="Сброс"></p> Итого баллов: <input type="text" name="result" readonly>`;
    form.innerHTML = html;

    form.addEventListener('click', (event) => {
        if (event.target.id === 'calc') {
            calculateReactResults(form, questions);
        }
    });

    document.body.appendChild(form);
}


function calculateReactResults(form, questions) {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = form.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.answer) {
            score++;
        }
    });
    form.result.value = score;

}


