const supabaseUrl = 'https://mvrrrothlzlhfccfajqg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cnJyb3RobHpsaGZjY2ZhanFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwOTMyNTMsImV4cCI6MjA0MTY2OTI1M30.yvnelV6ckrfmERyTyNZUMRrKLEE_5zNjwMqE9FCGXGA';
const supabase_ = supabase.createClient(supabaseUrl, supabaseAnonKey);

let isauth = false;




async function searchPassword(id, password) {
    const $password = document.getElementById('password').value;

    console.log(`Пользователь ввёл ${$password}`);





    // let { data: users, error } = await supabase_
    //     .from('user')
    //     .select('*')
    //     .eq('id', id);

    if (password !== $password) return false


    return true


}


async function searchScore(name) {
    try {
        let { data, error } = await supabase_
            .from('user')
            .select('score')
            .eq('user_name', name);

        if (error) {
            console.error('Error fetching score:', error);
            return null; // Indicate error
        }

        if (!data || data.length === 0) {
            console.log(`No score found for ${name}`);
            return null; // No score
        }

        // Extract the score (important: handles potential issues)
        const score = data[0].score;
        return score; // Return the score
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return null; // Return null on unexpected error
    }
}


async function welcome() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const msg = document.querySelector('.messages');

    try {
        const user = await searchUser(name);
        if (user && user.user_password === password) { // Проверка пароля
            console.log('Вы вошли');
            localStorage.setItem('name', name);
            localStorage.setItem('isauth', true);
            //  Получение и сохранение счета после успешной авторизации.  Нужна функция getScore(userId)
            const score = await getScore(user.id); //  Получение счета по ID пользователя
            localStorage.setItem('score', score);
            window.location.href = '../index.html'; // Используем href для надежности
        } else {
            msg.textContent = 'Неверный логин или пароль';
            showError(msg);
        }
    } catch (error) {
        console.error('Ошибка при авторизации:', error);
        showError(msg, 'Произошла непредвиденная ошибка.');
    }
}

async function register() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password1').value;
    const msg = document.querySelector('.messages');

    if (password !== password1 || name.length < 3) {
        showError(msg, 'Пароли не совпадают или имя слишком короткое.');
        return;
    }

    try {
        const userExists = await searchUser(name);
        if (userExists) {
            showError(msg, 'Пользователь с таким именем уже существует!');
        } else {
            const { data, error } = await supabase_.from('user').insert([{ user_name: name, user_password: password }]);
            if (error) {
                console.error('Ошибка при регистрации:', error);
                showError(msg, 'Ошибка при регистрации: ' + error.message);
            } else {
                showSuccess(msg, 'Регистрация прошла успешно!');
            }
        }
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        showError(msg, 'Произошла непредвиденная ошибка при регистрации.');
    }
}


async function searchUser(user_name) {
    let { data: users, error } = await supabase_
        .from('user')
        .select('*')
        .eq('user_name', user_name);

    if (error) {
        console.error('Ошибка при поиске пользователя:', error);
        throw error; // Передаем ошибку дальше
    }

    return users.length > 0 ? users[0] : null; // Возвращаем объект пользователя или null
}

// Функция для получения счета пользователя (необходимо реализовать)
async function getScore(userId) {
    // Здесь должен быть ваш код для получения счета из базы данных по userId
    // Пример:
    let { data: scores, error } = await supabase_.from('scores').select('score').eq('user_id', userId);
    if (error) throw error;
    return scores.length > 0 ? scores[0].score : 0; // Возвращаем счет или 0, если его нет
}


function showError(msg, text = 'Неверный логин или пароль') {
    msg.textContent = text;
    msg.classList.remove('d-none', 'success');
    msg.classList.add('error');
    setTimeout(() => msg.classList.add('d-none'), 3000);
}

function showSuccess(msg, text = 'Успешно') {
    msg.textContent = text;
    msg.classList.remove('d-none', 'error');
    msg.classList.add('success');
    setTimeout(() => msg.classList.add('d-none'), 3000);
}







