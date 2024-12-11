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
            question: "Что такое `useState`?",
            options: ["Функция для обработки событий", "Хук для управления состоянием компонента", "Метод для работы с API", "Функция для создания компонентов"],
            answer: 1
        },
        {
            question: "Что такое `useEffect`?",
            options: ["Хук для работы с формами", "Хук для управления состоянием", "Хук для выполнения побочных эффектов", "Функция для обработки событий"],
            answer: 2
        },
        {
            question: "Что такое props в React?",
            options: ["Внутреннее состояние компонента", "Данные, передаваемые в компонент", "Методы жизненного цикла компонента", "События, обрабатываемые компонентом"],
            answer: 1
        },
        {
            question: "Что такое ключи (`keys`) в React?",
            options: ["Идентификаторы компонентов", "Стили компонентов", "События компонентов", "Данные компонентов"],
            answer: 0
        },
        {
            question: "Для чего используется `Fragment` в React?",
            options: ["Для создания отдельных компонентов", "Для группировки элементов без добавления лишних элементов в DOM", "Для работы с формами", "Для обработки асинхронных запросов"],
            answer: 1
        },
        {
            question: "Что такое виртуальный DOM?",
            options: ["Физический DOM браузера", "Внутреннее представление DOM в React", "Внешняя библиотека для работы с DOM", "Способ оптимизации работы с базами данных"],
            answer: 1
        },
        {
            question: "Как передать данные из родительского компонента в дочерний?",
            options: ["Использовать `useState`", "Использовать `props`", "Использовать `useEffect`", "Использовать `useRef`"],
            answer: 1
        },
        {
            question: "Что такое `ref` в React?",
            options: ["Функция для работы с формами", "Переменная для хранения данных", "Ссылка на DOM-элемент", "Метод для обработки событий"],
            answer: 2
        },
        {
            question: "Как можно выполнить асинхронные операции в React?",
            options: ["Использовать `async/await`", "Использовать `setTimeout`", "Использовать `fetch` или `axios`", "Все вышеперечисленное"],
            answer: 3
        },
        {
            question: "Что такое контекст (`Context`) в React?",
            options: ["Способ передачи данных между компонентами", "Способ обработки событий", "Способ создания компонентов", "Способ работы с API"],
            answer: 0
        },
        {
            question: "Что такое `useReducer`?",
            options: ["Хук для управления состоянием", "Хук для работы с формами", "Хук для выполнения побочных эффектов", "Метод для работы с API"],
            answer: 0
        },
        {
            question: "Что такое `useCallback`?",
            options: ["Хук для оптимизации производительности", "Хук для работы с формами", "Хук для управления состоянием", "Метод для работы с API"],
            answer: 0
        },
        {
            question: "Что такое `useMemo`?",
            options: ["Хук для кэширования вычислений", "Хук для работы с формами", "Хук для управления состоянием", "Метод для работы с API"],
            answer: 0
        },
        {
            question: "Что такое `Suspense`?",
            options: ["Компонент для обработки загрузки данных", "Компонент для работы с формами", "Компонент для управления состоянием", "Метод для работы с API"],
            answer: 0
        },
        {
            question: "Как выполнить маршрутизацию в React?",
            options: ["Использовать библиотеку, например, React Router", "Использовать встроенные функции React", "Использовать библиотеку, например, Redux", "Написать свой механизм маршрутизации"],
            answer: 0
        },
        {
            question: "Что такое Higher-Order Component (HOC)?",
            options: ["Функция, которая принимает компонент и возвращает новый компонент", "Компонент, который отображает другие компоненты", "Компонент, который управляет состоянием приложения", "Метод для работы с API"],
            answer: 0
        },
        {
            question: "Что такое React Hooks?",
            options: ["Функции, которые позволяют использовать функциональные компоненты", "Функции, которые управляют состоянием приложения", "Функции, которые обрабатывают события", "Функции, которые работают с API"],
            answer: 0
        },
        {
            question: "Для чего используется  `key` атрибут при отображении списков?",
            options: ["Для улучшения производительности React при обновлении списков", "Для стилизации элементов списка", "Для добавления событий к элементам списка", "Для сериализации данных списка"],
            answer: 0
        }
    ];


    const form = document.createElement('form');
    let html = `<h3>Тест по React (20 вопросов)</h3>`;

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


