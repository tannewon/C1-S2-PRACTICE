const STUDENTS_DATA = [
    { firstName: "An", age: 20 },
    { firstName: "Bình", age: 22 },
    { firstName: "Cẩm", age: 21 },
    { firstName: "An", age: 19 }, // Duplicate first name !
  ];
  
  /**
   * Update 1 student age, given his/her first name
   * @param {string} firstName - the student first name
   * @param {age} newAge  - the student new age
   */
  function updateStudentAge(firstName, newAge) {
    let student = STUDENTS_DATA.find((s) => s.firstName === firstName);
    if (student) {
      student.age = newAge;
    }
  }
  
  // 1 - Update An age to 30
  updateStudentAge("An", 30);
  
  // 2 - Print the updated data
  console.log(JSON.stringify(STUDENTS_DATA));
  