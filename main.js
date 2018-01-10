//write your code here to make the tests pass

var Document = function (employeeName) {
    this.employeeName = employeeName;
};


var Employee = function (name) {
    this.name = name;
};
Employee.prototype.work = function (office) {
    for (var i=0; i<10;i++) {
        office.documents.push(new Document(this.name));
    }
};



var Manager = function (name) {
    this.name = name;
    this.employees = [];
};
Manager.prototype.hireEmployee = function (name) {
    this.employees.push(new Employee(name));
};
Manager.prototype.askEmployeesToWork = function (office) {
    for (var i=0; i<this.employees.length; i++) {
        this.employees[i].work(office);
    }
};

var Cleaner = function (name) {
    Employee.call(this, name);
};
Cleaner.prototype = Object.create(Employee.prototype);
Cleaner.prototype.clean = function () { console.log("Clean")};

var Office = function() {
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
    for (var i=0; i<this.managers.length; i++) {
        this.managers[i].askEmployeesToWork(this);
    }

    for(var i=0; i<this.cleaners.length; i++) {
        this.cleaners[i].clean();
    }
};




