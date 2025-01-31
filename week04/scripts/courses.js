const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            instructor: "Sis A"
        },   
    ],
    enrollStudent: function (sectionNum) {
            const sectionIndex = this.sections.findIndex(
              (section) => section.sectionNum == sectionNum 
            );
            if (sectionIndex >= 0) {
                this.sections[sectionIndex].enrolled++;
                renderSections(this.sections);
            }
        },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    }
  };

  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.textContent = course.name;
    courseCode.textContent = course.code;
  }

  function renderSections(sections) {
    const html = sections.map(section => (
        `<tr>
    <td>${section.sectionNum}</rd>
    <td>${section.roomNum}</rd>
    <td>${section.enrolled}</rd>
    <td>${section.days}</rd>
    <td>${section.instructor}</rd>
    </tr>`
    ));
    document.querySelector("#sections").innerHTML = html.join("");
  }

  document.querySelector("#enrollStudent").addEventListener('click', (e) => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  })
  document.querySelector("#dropStudent").addEventListener('click', (e) => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  })

setCourseInfo(aCourse)
renderSections(aCourse.sections)