//write your code here to make the tests pass

let Document = function (employeeName) {
    this.employeeName = employeeName;
};


let Employee = function (name) {
    this.name = name;
};
Employee.prototype.work = function (office) {
    for (let i=0; i<10;i++) {
        office.documents.push(new Document(this.name));
    }
};



let Manager = function (name) {
    this.name = name;
    this.employees = [];
};
Manager.prototype.hireEmployee = function (name) {
    this.employees.push(new Employee(name));
};
Manager.prototype.askEmployeesToWork = function (office) {
    for (let i=0; i<this.employees.length; i++) {
        this.employees[i].work(office);
    }
};

let Cleaner = function (name) {
    Employee.call(this, name);
};
Cleaner.prototype = Object.create(Employee.prototype);
Cleaner.prototype.clean = function () { console.log("Clean")};

let Office = function() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
};
Office.prototype.hireCleaner = function (name) {
    this.cleaners.push(new Cleaner(name));
};
Office.prototype.hireManager = function (name) {
    this.managers.push(new Manager(name));
};

Office.prototype.startWorkDay = function () {
    for (let i=0; i<this.managers.length; i++) {
        this.managers[i].askEmployeesToWork(this);
    }

    for(let i=0; i<this.cleaners.length; i++) {
        this.cleaners[i].clean();
    }
};




