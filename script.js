const students = [];

function addStudent(){                                //button function (addStudent())
  const name = prompt("Enter the student's name");    //user input, input added in variable 'name'
  const grade = parseInt(prompt("Enter the student's grade"));    //input added in variable 'grade'
  const student = {                                   //object
    name : name,
    grade : grade,
  };


students.push(student);                               //.push is for adding new value into student variable
alert('Student added!')                               //alert message
}

function viewStudents(){                              //button function (viewStudents())
  let studentList = "List of students:\n";            // start with title (showing list of students added)
  for (const student of students) {                   // loop every student inside "students" array
    studentList += `${student.name}: ${student.grade}\n`;// add name and grade to the list (each in new line)
  }
  alert(studentList);                                 // show all student list in popup alert
}

//parseInt = convert strings to integers
// \n = add new line