function createCourseSection(name, imgSrc, altText) {
    let list = document.querySelector('.courses_list');

    let div = document.createElement('div');
    div.className = 'list';

    div.innerHTML = `
      <div class="name">
          <h2>${name}</h2>
      </div>
      <div class="photo">
          <img src="${imgSrc}" alt="${altText}">
      </div>
    `;

    div.addEventListener('click', function () {
        let courseName = this.querySelector('.name h2').textContent;
        console.log(courseName);

        render_test(courseName)

    })




    list.appendChild(div);
}

createCourseSection("Введение в React", "img/react.png", "React logo");
createCourseSection("JavaScript тест", "img/js.png", "React logo");
createCourseSection("HTML для начинающих", "img/html.png", "React logo");
createCourseSection("Java", "img/java.jpg", "React logo");
createCourseSection("React", "img/react.png", "React logo");
createCourseSection("Введение в TypeScript", "img/typescript.png", "React logo");


function render_test(courseName) {
    console.log(courseName);
    window.location.replace(`test/${courseName}.html`)

}