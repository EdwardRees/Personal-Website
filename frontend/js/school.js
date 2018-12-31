class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }
}

class Teacher extends Person {
  constructor(f, l, a = 30, rooms = Array()) {
    super(f, l, a);
    this.rooms = rooms;
    this.email = this.generateEmail();
  }

  generateEmail() {
    const f = super.getFirstName();
    const l = super.getLastName();
    const name = f
      .substring(0, 1)
      .concat(l)
      .toLowerCase();
    return name.concat("@hkis.edu.hk");
  }
  getClassrooms() {
    return this.rooms;
  }
  findIndexOfClassroom(roomToSearch) {
    x = -1;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i] == roomToSearch) {
        x = i;
      }
    }
    return x;
  }
  getName() {
    return super
      .getFirstName()
      .concat(" ")
      .concat(super.getLastName());
  }
  getEmail() {
    return this.email;
  }
}

class Subject {
  constructor(
    name = "",
    teacher = new Teacher("", "", ""),
    topic = "",
    credit = 0,
    room = 0,
    period = 0,
    finalGrade = 0
  ) {
    this.name = name;
    this.teacher = teacher;
    this.topic = topic;
    this.credit = credit;
    this.room = room;
    this.period = period;
    this.finalGrade = finalGrade;
    this.isAP();
    this.isHonors();
  }

  gradeToGPA() {
    var value = 0.0;
    var val = this.finalGrade.toUpperCase();
    switch (val) {
      case "A":
        value = 4.0;
        break;
      case "A-":
        value = 3.67;
        break;
      case "B+":
        value = 3.33;
        break;
      case "B":
        value = 3.0;
        break;
      case "C":
        value = 2.33;
        break;
      case "D":
        value = 1.33;
        break;
      case "F":
        value = 0.0;
        break;
    }
    return value;
  }
  isAP() {
    if (this.name.includes("AP")) {
      this.weight += 2;
      return true;
    }
    return false;
  }
  isHonors() {
    if (this.name.includes("Honors") || this.name.includes("Honours")) {
      this.weight++;
      return true;
    }
    return false;
  }
  getName() {
    return this.name;
  }
  getTeacher() {
    return this.teacher;
  }
  getTopic() {
    return this.topic;
  }
  getCredit() {
    return this.credit;
  }
  getWeight() {
    return this.weight;
  }
  getRoom() {
    return this.room;
  }
  getPeriod() {
    return this.period;
  }
  getInfo() {
    return (
      this.getName() +
      " is a " +
      this.getTopic() +
      " class, taught by " +
      this.getTeacher().getName() +
      ", with a credit of " +
      this.getCredit() +
      "\n" +
      "and a weight of " +
      this.getWeight() +
      " in room " +
      this.getRoom() +
      " taking place during period " +
      this.getPeriod() +
      "."
    );
  }
}

class Student extends Person {
  constructor(f, l, a, id, classes = Array()) {
    super(f, l, a);
    this.id = id;
    this.classes = classes;
  }

  getClasses() {
    return this.classes;
  }

  generateEmail() {
    return this.id + "@hkis.edu.hk";
  }

  isActive(year) {
    const idCheck = this.id + "";
    const x = "20" + idCheck.substring(0, 2);
    if (parseInt(x) < parseInt(year)) {
      return true;
    } else if (parseInt(x) >= parseInt(year)) {
      return false;
    }
    return false;
  }

  calculateOverallGPA() {
    var value = 0;
    var totalCreditHours = 0;
    var classes = this.classes;
    for (let c of classes) {
      value += c.gradeToGPA() * c.getCredit();
    }
    for (let c of classes) {
      totalCreditHours += c.getCredit();
    }
    this.gpa = Math.round((value / totalCreditHours) * 100);
    this.gpa /= 100;
  }

  getGPA() {
    this.calculateOverallGPA();
    return this.gpa;
  }

  getName() {
    return super
      .getFirstName()
      .concat(" ")
      .concat(super.getLastName());
  }

  getEmail() {
    return this.email;
  }

  getID() {
    return this.id;
  }

  getStudentProfile() {
    const name = this.getName();
    const id = this.getID();
    const gpa = this.getGPA();
    const classes = this.getClasses();
    var profile = "";
    profile +=
      "Name: " + name + "\nID: " + id + "\nGPA: " + gpa + "\nClasses: \n";
    for (let s of classes) {
      profile += s.getName() + " taught by " + s.getTeacher().getName() + ",\n";
    }
    profile = profile.substring(0, profile.length - 2);
    return profile;
  }
  printStudentProfile() {
    const name = this.getName();
    const id = this.getID();
    const gpa = this.getGPA();
    const classes = this.getClasses();
    var profile = "";
    profile +=
      "Name: " +
      name +
      "<br>ID: " +
      id +
      "<br>GPA: " +
      gpa +
      "<br>Classes: <br>";
    for (let s of classes) {
      profile +=
        s.getName() + " taught by " + s.getTeacher().getName() + ",<br>";
    }
    profile = profile.substring(0, profile.length - 5);
    profile += "<br><br>";
    const statement = this.isActive(2018)
      ? " graduated "
      : " has not graduated yet ";
    profile += this.getName() + statement;
    profile += "<br><br><br>";
    return profile;
  }

  setClasses(classes) {
    this.classes = classes;
  }

  setLastName(l) {
    this.lastName = l;
  }
  setFirstName(f) {
    this.firstName = f;
  }
  setAge(a) {
    this.age = a;
  }
}

class School {
  constructor() {
    this.teachers = Array();
    this.students = Array();
  }

  getStudents() {
    return this.students;
  }
  getTeachers() {
    return this.teachers;
  }

  addStudent(student) {
    this.students.push(student);
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  removeStudentByID(id) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].getID() == id) {
        delete this.students[i];
        this.students.splice(i, 1);
      }
      continue;
    }
  }

  updateStudent(f, l, a, id, classes) {
    const s = this.getStudents();
    for (let i = 0; i < s.length; i++) {
      if (s[i].getID() == id) {
        s[i].setClasses(classes);
        s[i].setFirstName(f);
        s[i].setLastName(l);
        s[i].setAge(a);
      }
    }
  }

  listOfStudents() {
    var students = this.getStudents();
    var student = $("#students");
    var studentTitle = $("#schoolTitle");
    student.empty();
    studentTitle.empty();
    studentTitle.append(
      "List of Students: <span>" + students.length + "</span>"
    );
    for (var x of students) {
      student.append(
        "<li class='col-lg-6'> " + x.printStudentProfile() + "</li>"
      );
    }
  }

  clear() {
    const students = this.getStudents();
    for (let i = 0; i < students.length; i++) {
      students.splice(i, students.length);
    }
  }
}

function test() {
  const stu = new Student("Edward", "Rees", 18, 180213);
  const s = new Student("Edward", "Rees", 18, 180213, [
    new Subject(
      "Statistics",
      new Teacher("Quinten", "Painter"),
      "Math",
      0.5,
      602,
      1,
      "A"
    ),
    new Subject(
      "Math Of Human Behavior",
      new Teacher("Quinten", "Painter"),
      "Math",
      0.5,
      602,
      1,
      "A-"
    )
  ]);
  // console.log(s.getClasses()[1].gradeToGPA());
  console.log(s.getStudentProfile());

  // console.log(stu.getAge());
}

test();
