class Department {
    id = -1;
    name = "n/a";
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static from (data) {
        return new Department(data.id || -1, data.name || "n/a"); 
    }
}

module.exports = Department;