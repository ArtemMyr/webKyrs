
const supabaseUrl = 'https://mvrrrothlzlhfccfajqg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cnJyb3RobHpsaGZjY2ZhanFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwOTMyNTMsImV4cCI6MjA0MTY2OTI1M30.yvnelV6ckrfmERyTyNZUMRrKLEE_5zNjwMqE9FCGXGA';
const supabase_ = supabase.createClient(supabaseUrl, supabaseAnonKey);


async function searchUser(user_name) {
    let { data: users, error } = await supabase_
        .from('user')
        .select('*')
        .eq('user_name', user_name);

    if (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return false;
    }

    if (users.length === 0) {
        console.log('Пользователь не найден');
        return true;
    } else {
        console.log('Найденные пользователи:', users);
        return false;
    }
}


async function addData() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password1').value;
    const msg = document.querySelector('.messages');

    if (password == password1 && name.length >= 3) {
        const userExists = await searchUser(name);
        if (userExists) {
            const { data, error } = await supabase_
                .from('user')
                .insert([
                    { user_name: name, user_password: password }
                ]);

            msg.classList.remove('d-none');
            if (error) {
                console.error('Ошибка при вставке:', error);
                msg.textContent = 'Ошибка при добавлении данных: ' + error.message;
                msg.classList.add('red');
            } else {
                console.log('Данные успешно добавлены:', data);
                msg.textContent = 'Данные успешно добавлены!';
                msg.classList.remove('red');
            }
            setTimeout(() => { msg.classList.add('d-none') }, 3000);
        } else {
            msg.classList.remove('d-none');
            msg.textContent = 'Пользователь с таким именем уже существует!';
            msg.classList.add('red');
            setTimeout(() => { msg.classList.add('d-none') }, 3000);
        }
    } else {
        msg.classList.remove('d-none');
        msg.textContent = 'Данные не верные!';
        msg.classList.add('red');
        setTimeout(() => { msg.classList.add('d-none') }, 3000);
    }
}
