class Charge {
  /**
   *
   * @param {*} string name
   * @param {*} double hours
   * @param {*} double days
   * @param {*} int difficulty
   * @param {*} boolean rush
   */
  constructor(name, hours, days, difficulty, rush) {
    this.name = name.toUpperCase();
    this.cost;
    this.hours = hours;
    this.days = days;
    this.difficulty = difficulty;
    this.rush = rush;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setHours(hours) {
    this.hours = hours;
  }
  setRush(rushSet) {
    this.rush = rushSet;
  }
  setDays(days) {
    this.days = days;
  }
  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }
  daysToHours(days) {
    // Assuming 8 hour work days
    this.hours += days * 8;
  }

  getHours() {
    return this.hours;
  }
  getDifficulty() {
    return this.difficulty;
  }
  rushCost() {
    const check = this.rush;
    if (check) {
      return 500;
    }
    return 0;
  }
  /**
   * For example,
   *
   *     6: Mobile App
   *     5: New Language
   *     4: New framework
   *     3:
   *     2: Application of Skills
   *     1: Basic Build
   *       - Website
   *     0: Consultation
   **/
  difficultyCostChange() {
    const x = this.difficulty;
    if (typeof x == "number") {
      switch (x) {
        case 0:
          this.cost = 80;
          break;
        case 1:
          this.cost = 100;
          break;
        case 2:
          this.cost = 120;
          break;
        case 3:
          this.cost = 140;
          break;
        case 4:
          this.cost = 180;
          break;
        case 5:
          this.cost = 220;
          break;
        case 6:
          this.cost = 500;
          break;
      }
    } else {
      switch (x) {
        case x.includes("consultation"):
          this.cost = 80;
          break;
        case x.includes("website"):
          this.cost = 100;
          break;
        case x.includes("application of skills"):
          this.cost = 120;
          break;
        case x.includes("third option"):
          this.cost = 140;
          break;
        case x.includes("framework"):
          this.cost = 180;
          break;
        case x.includes("language"):
          this.cost = 220;
          break;
        case x.includes("mobile"):
          this.cost = 500;
          break;
      }
    }
  }
  /**
   * For example,
   *
   *     6: Mobile App
   *     5: New Language
   *     4: New framework
   *     3:
   *     2: Application of Skills
   *     1: Basic Build
   *       - Website
   *     0: Consultation
   **/
  difficultyToCost() {
    const x = this.getDifficulty();
    var additional = 0;
    if (typeof x == "number") {
      switch (x) {
        case 0:
          break;
        case 1:
          additional = 100;
          break;
        case 2:
          additional = 200;
          break;
        case 3:
          additional = 400;
          break;
        case 4:
          additional = 500;
          break;
        case 5:
          additional = 800;
          break;
        case 6:
          additional = 1000;
          break;
        case 7:
          additional = 1200;
          break;
        case 8:
          additional = 1400;
          break;
        case 9:
          additional = 1500;
          break;
        case 10:
          additional = 2000;
          break;
        default:
          additional = 0;
          break;
      }
    } else {
      switch (x) {
        case x.includes("consultation"):
          this.cost = 0;
          break;
        case x.includes("website"):
          this.cost = 100;
          break;
        case x.includes("application of skills"):
          this.cost = 200;
          break;
        case x.includes("third option"):
          this.cost = 400;
          break;
        case x.includes("framework"):
          this.cost = 500;
          break;
        case x.includes("language"):
          this.cost = 800;
          break;
        case x.includes("mobile"):
          this.cost = 1000;
          break;
      }
    }
    return additional;
  }

  setCost() {
    this.daysToHours(this.days);
    this.difficultyCostChange();
    this.cost *= this.getHours();
    this.cost += this.difficultyToCost();
    this.cost += this.rushCost();
  }

  getCost() {
    this.setCost();
    return this.cost;
  }

  getUSCost() {
    this.setCost();
    this.cost *= 0.1274454;
    this.cost *= 10;
    this.cost = Math.round(this.cost);
    this.cost /= 10;
    return this.cost;
  }

  setBase(price) {
    this.cost = price;
    this.setCost();
  }

  addHours(hour) {
    this.hours += hour;
  }

  addDays(day) {
    this.days += day;
  }

  printCost() {
    console.log(this.getCost());
  }

  printUSCost() {
    console.log(this.getUSCost());
  }
}

class Job {
  constructor(name = String) {
    this.projects = new Array();
  }

  addProject(project) {
    this.projects.push(project);
  }

  getProjects() {
    return this.projects;
  }

  updateProject(project) {
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i] == project) {
        delete this.projects[i];
        this.project.splice(i, 1);
      }
    }
    this.projects.push(project);
  }

  getProjectByName(name) {
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].getName() == name.toUpperCase()) {
        return this.projects[i];
      }
    }
  }

  getProjectByProject(project) {
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i] == project) {
        return this.projects[i];
      }
    }
  }
  totalUSCost() {
    var TotalCost = 0;
    for (var cost in this.projects) {
      TotalCost += this.projects[cost].getUSCost();
    }
    return TotalCost;
  }


  removeItemByName(name) {
    const cart = this.getProjects();
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].getName().toUpperCase() == name.toUpperCase()) {
        delete cart[i];
        cart.splice(i, 1);
      }
      continue;
    }
  }


  clear() {
    const cart = this.getProjects();
    for (let i = 0; i < cart.length; i++) {
      cart.splice(i, cart.length);
    }
  }

  totalCost() {
    var TotalCost = 0;
    for (var cost in this.projects) {
      TotalCost += this.projects[cost].getCost();
    }
    return TotalCost;
  }
  printTotalCost() {
    console.log(this.totalCost());
  }

  printTotalUS() {
    console.log(this.totalUSCost());
  }
  updateList() {
    var job = this.getProjects();
    var projects = $("#projects");
    var projectTitle = $("#projectTitle");
    projects.empty();
    projectTitle.empty();
    projectTitle.append("List of Projects: <span>" + job.length + "</span>");
    for (var x of job) {
      projects.append(
        "<li class='col-lg-3 item'>" +
          x.getName() +
          ": " +
          x.getCost() +
          "</li>"
      );
    }
  }
}
function JobsTest() {
  const Jobs = new Job();

  const consultation = new Charge("Consultation", 0, 0, 0.0, 0, false);
  Jobs.addProject(consultation);
  Jobs.getProjectByProject(consultation).addHours(5.0);

  const research = new Charge("Research", 0.0, 0.0, 0, false);
  Jobs.addProject(research);
  Jobs.getProjectByProject(research).addHours(3.0);

  const website = new Charge("Website", 0.0, 0.0, 1, false);
  Jobs.addProject(website);
  Jobs.getProjectByProject(website).addDays(2.0);

  const framework = new Charge("Framework", 0.0, 0.0, 4, false);
  Jobs.addProject(framework);
  Jobs.getProjectByProject(framework).addDays(3.0);

  const mobile = new Charge("Mobile", 0.0, 0.0, 6, false);
  Jobs.addProject(mobile);
  Jobs.getProjectByProject(mobile).addDays(5.0);

  Jobs.printTotalCost();
}

function TKCharge() {
  const TaiKwun = new Job();
  const consultation = new Charge("Excel", 0.0, 0.0, 0, false);
  TaiKwun.addProject(consultation);
  TaiKwun.getProjectByName("Excel").addDays(1.0);
  TaiKwun.printTotalCost();
}

function Wayne() {
  const Wayne = new Job();
  const website = new Charge("website", 0.0, 0.0, 0, false);
  Wayne.addProject(website);
  Wayne.getProjectByName("website").addDays(2.0);
  Wayne.printTotalCost();
}

function mom() {
  const mom = new Job();
  const photoshop = new Charge("photoshop", 0.0, 0.0, 1, false);
  mom.addProject(photoshop);
  mom.getProjectByProject(photoshop).addHours(3.0);
  mom.printTotalCost();
}
// mom();

// JobsTest();
// TKCharge();
// Wayne();
