const questions = [
    {
        question: "Что такое LA? В каких единицах измеряется?",
        answers: ["LA (load average) — параметр, определяющий среднюю нагрузку на систему за период времени (1 мин, 5 минут, 15 минут). Измеряется в количестве задач на одно ядро процессора",
        "LA — Los Angeles, город в США. Единицы измерения подразумевают площадь города",
        "LA – употребляется перед существительными женского рода единственного числа (la carrete – катушка, la hija – дочь, la estepa – степь)."
    ],
        correct: 1,
    },
    {
        question: "Что будет если на сервере LA = 100?",
        answers: ["Ничего не изменится",
        "Сервер вовсе перестанет отвечать на запросы пользователя",
        "Вероятно, что на сервере будет наблюдаться замедленная работа сервисов, но если параметр LA равен количеству ядер в системе или количеству потоков в системе, то данная нагрузка является нормальной"
    ],
        correct: 3,
    },
    {
        question: "Почему при высоких показателях значения LA на сервере может не наблюдаться проблем (консоль ssh отзывается, сервисы работают в обычном режиме)?",
        answers: ["На параметр нагрузки LA влияет также и ожидание ввода-вывода (параметр wa в утилите top) в дисков и задержка сети. Данные параметры могут не влиять на работу основных сервисов в системе, но учитываются при расчете общей нагрузки на систему",
    "Сервер оснащён мощным программным обеспечением, которое помогает справиться с высокой нагрузкой",
    "Оба ответа правильные"
    ],
    correct: 1,
    },
    {
        question: `Представлен вывод команды top. Что означает каждая запись в выводе?
        top - 21:29:24 up 14:18, 1 user, load average: 0,78, 1,48, 1,10
        Tasks: 277 total, 3 running, 274 sleeping, 0 stopped, 0 zombie
        %Cpu(s): 12,4 us, 2,5 sy, 0,1 ni, 84,8 id, 0,1 wa, 0,0 hi, 0,1 si, 0,0 st
        KiB Mem : 7106404 total, 306972 free, 3127144 used, 3672288 buff/cache
        KiB Swap: 8191996 total, 8191996 free, 0 used. 3270520 avail Mem`,
        answers: [`top – название утилиты.

        21:29:24 – текущее время системы.
        
        up 14:18 – сколько часов:минут система работает с момента последнего запуска.
        
        1 user – количество пользователей авторизованных в системе.
        
        load average: 0,78, 1,48, 1,10 – параметр средней нагрузки на систему за период времени 1 минута, 5 минут, 15 минут.
        
        277 total – всего процессов в системе.
        `,
    `3 running – количество процессов в работе.

    274 sleeping – количество процессов в состоянии sleeping: ожидает какого-либо события или сигнала.
    
    0 stopped – количество приостановленных процессов сигналом STOP или выполнением трассировки.
    
    0 zombie – количество зомби-процессов, которые завершили своё выполнение, но присутствующие в системе, чтобы дать родительскому процессу считать свой код завершения.
    `,
    `KiB Mem – количество оперативной памяти в кибибайтах (кратно 1024): 7106404 total — всего доступно оперативной памяти в системе, 306972 free — свободно оперативной памяти для использования, 3127144 used — использовано оперативной памяти, 3672288 buff/cache — буферизовано/закешировано оперативной памяти.

    KiB Swap – количество swap-памяти в кибибайтах (кратно 1024), которые выделено на диске: 8191996 total – всего выделено swap-памяти, 8191996 free – свободно swap-памяти 0 used – использовано swap-памяти, 3270520 avail Mem – доступно для использования swap-памяти.
    `,
    "Всё вместе"
    ],
    correct: 4,
    },
    {
        question: "Как в утилите top в Linux посмотреть нагрузку на каждое ядро процессора?",
        answers: ["В утилите top нажать 1, чтобы отобразить все ядра в системе",
        "Прописать команду в терминале: top la",
        "Это невозможно сделать"
    ],
        correct: 1,
    },
    {
        question: "Как в утилите top в Linux посмотреть какой командой был запущен процесс?",
        answers: ["Прописать команду в терминале: top commands",
        "В утилите top нажать c, чтобы отобразить команды, которыми были запущены процессы",
        "Это невозможно сделать"
    ],
        correct: 2,
    },
    {
        question: "Где хранятся имена файлов/директорий?",
        answers: ["Команда files, которая хранит и возвращает имена файлов/директорий",
        "В базе данных на отдельном локальном сервере",
        "Имя файла/директории хранится в информационной структуре каталогов"
    ],
        correct: 3,
    },
    {
        question: "Как удалить файл с именем -rf?",
        answers: ["rm -rf",
        "rm ./-rf",
        "rm ./rf"
    ],
        correct: 2,
    },
    {
        question: "Как посмотреть описание дискриптора? Как посмотреть время последней модификации файла?",
        answers: ["stat 'path_to_file' и stat --format=%y dira",
        "descr 'path_to_file' и descr --format=%y dira",
        "Никак ;("
    ],
        correct: 1,
    },
    {
        question: "Для чего нужна переменная окружения PATH?",
        answers: ["Хранит в себе локальные пути к исполняемым файлам",
        "Переменная окружения PATH содержит абсолютные пути директорий, в которых производится поиск исполняемых файлов при вводе команд",
        "Оба варианта неверные"
    ],
        correct: 2,
    },
    {
        question: "Как посмотреть нагрузку на диски?",
        answers: ["Установить утилиту sysstat, проверить нагрузку на диски iostat -xqc",
        "Установить утилиту sysstat, проверить нагрузку на диски iostat -xtc",
        "Установить утилиту suuus, проверить нагрузку на диски impostats -sus"
    ],
        correct: 2,
    },
    {
        question: "Что такое файл в понятиях Unix-like операцинных системах?",
        answers: ["Файлы – это объекты, в которые мы записываем информацию и наши данные, исполняемые файлы, но кроме этих привычных нам понятий здесь есть файлы специального назначения – файлы устройств, файлы туннелей, сокетов и многое другое",
        "Файл – прозрачный перфорированный пакет для документов носит несколько названий «файлик», «мультифора» и «карман».",
        "Файл – именованная область данных на носителе информации, используемая как базовый объект взаимодействия с данными в операционных системах"
    ],
        correct: 1,
    },
    
    
];

//находим элементы
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const btn = document.querySelector('#submit');



//игра
let score = 0;
let questionIndex = 0;

//очищаем разметку
clearPage();
showQuestion();
btn.onclick = checkAnswer;



function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    const headerTemplate = `<h2 class="main__question">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    let answerNumber = 1;
    for (answerText of questions[questionIndex]['answers']){
        const questionTemplate = 
        `
            <li class="main__item">
                            <label class="main__item-label">
                                <input value="%number%" type="radio" name="answer" class="main__item-input">
                                <span class="main__item-check"></span>
                            </label>
                            <span class="main__item-text">%answer%</span>
            </li>
        `;
        
        let answer = questionTemplate.replace('%answer%', answerText);
        answer = answer.replace('%number%', answerNumber);
        listContainer.innerHTML += answer;
        answerNumber++;
    }  
}
function checkAnswer(){
    //находим выбранную кнопку
    const checkedRadio = document.querySelector('input:checked');
    
    //если ответа нет - выход из функции
    if (!checkedRadio){
        btn.blur();
        alert('Вы не выбрали ответ ;(');
        return;
    }
    //находим значение и переводим значение радиокнопки из строки в число
    const userAnswer = parseInt(checkedRadio.value);
    if (userAnswer === questions[questionIndex]['correct']){
        score++;
    }
    if (questions.length-1 !== questionIndex){
        questionIndex++;
        clearPage();
        showQuestion();
    } else{
        clearPage();
        showResults();
        restartQuiz();
    }
}
function showResults(){
    const resultsTemplate = 
    `
        <h2 class="main__title title">%title%</h2>
        <h3 class="main__score">%message%</h3>
        <p class="main__result">%result%</p>
    `;
    let title, message;

    //блок результатов
    if (score === questions.length){
        title = 'Вы молодец йоу 🧛‍♂️';
        message = 'Вы ответили верно на все вопросы! 🌊';

    } else if ((score * 100) / questions.length >= 50){
        title = 'Вот это емае 😲';
        message = 'Вы ответили верно на большую часть вопросов! 🤓';
    } else if ((score * 100) / questions.length < 50){
        title = 'Тилт 😔';
        message = 'Количество вверных ответов меньше половины всех вопросов! 😭';
    }

    let result = `${score} из ${questions.length}`;
    const finalMessage = resultsTemplate
                                    .replace('%title%', title)
                                    .replace('%message%', message)
                                    .replace('%result%', result)
    headerContainer.innerHTML = finalMessage;
}

function restartQuiz(){
    const btnTemplate = 
    `
    %title%
    `;
    const btnHTML = btnTemplate.replace('%title%', 'Обновите страницу :)');
    btn.innerHTML = '';
    btn.innerHTML = btnHTML;
}