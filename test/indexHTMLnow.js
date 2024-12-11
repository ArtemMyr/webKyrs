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
            question: "Что такое HTML?",
            options: [
                "Язык программирования",
                "Язык разметки гипертекста",
                "Стиль оформления веб-страницы",
                "Язык сценариев"
            ],
            answer: 1
        },
        {
            question: "Какой тег используется для определения заголовка документа?",
            options: ["<head>", "<h1>", "<title>", "<body>"],
            answer: 2
        },
        {
            question: "Какой тег используется для основного содержимого страницы?",
            options: ["`<head>`", "`<h1>`", "`<title>`", "`<body>`"],
            answer: 3
        },
        {
            question: "Тег для создания абзаца?",
            options: ["`<br>`", "`<p>`", "`<b>`", "`<div>`"],
            answer: 1
        },
        {
            question: "Тег для горизонтальной линии?",
            options: ["`<hr>`", "`<br>`", "`<line>`", "`<div>`"],
            answer: 0
        },
        {
            question: "Атрибут для создания гиперссылки?",
            options: ["`href`", "`src`", "`alt`", "`title`"],
            answer: 0
        },
        {
            question: "Тег для вставки изображения?",
            options: ["`<img>`", "`<picture>`", "`<figure>`", "`<image>`"],
            answer: 0
        },
        {
            question: "Атрибут для alt-текста изображения?",
            options: ["`src`", "`alt`", "`title`", "`width`"],
            answer: 1
        },
        {
            question: "Тег для списка с маркерами?",
            options: ["`<ol>`", "`<ul>`", "`<li>`", "`<dl>`"],
            answer: 1
        },
        {
            question: "Тег для нумерованного списка?",
            options: ["`<ol>`", "`<ul>`", "`<li>`", "`<dl>`"],
            answer: 0
        },
        {
            question: "Тег для элемента списка?",
            options: ["`<ol>`", "`<ul>`", "`<li>`", "`<dl>`"],
            answer: 2
        },
        {
            question: "Тег для создания таблицы?",
            options: ["`<table>`", "`<tr>`", "`<td>`", "`<th>`"],
            answer: 0
        },
        {
            question: "Тег для строки в таблице?",
            options: ["`<table>`", "`<tr>`", "`<td>`", "`<th>`"],
            answer: 1
        },
        {
            question: "Тег для ячейки в таблице?",
            options: ["`<table>`", "`<tr>`", "`<td>`", "`<th>`"],
            answer: 2
        },
        {
            question: "Тег для заголовка ячейки в таблице?",
            options: ["`<table>`", "`<tr>`", "`<td>`", "`<th>`"],
            answer: 3
        }
    ];


    const form = document.createElement('form');
    let html = `<h3>Тест по HTML (23 вопросов)</h3>`;

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


