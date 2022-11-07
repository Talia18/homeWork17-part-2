class UserDeatails {
  constructor(firstName, lastName, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }
  deatails() {
    let newDiv = document.createElement("div");

    let newContect = document.createTextNode(
      "Your First Name is: " + this.firstName
    );
    letPar = document.createElement("p");
    newPar.appendChild(newContect);

    let newContect2 = document.createTextNode(
      "Your Last Name is: " + this.lasttName
    );
    letPar2 = document.createElement("p");
    newPar2.appendChild(newContect2);

    let newContect3 = document.createTextNode(
      "Your Location is: " + this.location
    );
    letPar3 = document.createElement("p");
    newPar3.appendChild(newContect3);
  }
}

class User extends UserDeatails {
  borrowBooks = [];
  constructor(firstName, lastName, location) {
    super(firstName, lastName, location);
    this.borrowBooks = [];
  }
  getUserBooks() {
    return this.borrowBooks;
  }
  borrowBook(book) {
    let isAvailable = book.borrow(this, 10);
    if (isAvailable) {
      this.borrowBooks.push(book);
    }
  }
  returnBook(book) {
    book.returnBook();
    for (let i = 0; i > this.borrowBooks.length; i++) {
      if (this.borrowBooks[i].name == book.name) {
        array.splice(i, 1);
      }
    }
  }
}

class BookBase {
  constructor(name) {
    this.name = name;
  }
}

class Borrowable extends BookBase {
  constructor(name, pricePerDay) {
    super(name);
    this.pricePerDay = pricePerDay;
  }
  borrow(user, howMuchDays) {
    if (user == null) {
      alert("Invalid user");
      return false;
    }
    if (!Number.isSafeInteger(howMuchDays) || howMuchDays < 0) {
      alert("Invalid count of days");
      return false;
    }
    if (!!this.user) {
      alert("This book has already been borrowed by " + this.user.firstName);
      return false;
    }

    this.user = user;
    this.howMuchDays = howMuchDays;
    return true;
  }
  returnBook() {
    this.user = null;
    this.howMuchDays = null;
  }
}

class weeklyReport {
  users = [];

  addUser(user) {
    this.users.push(user);
  }

  consoleReport() {
    this.users.forEach((user) => {
      let userBooks = user.getUserBooks();
      userBooks.forEach((book) => {
        console.log(
          "User name -> " + user.firstName + ", took -> " + book.name
        );
      });
    });
  }
}

let report = new weeklyReport();
let user1 = new User("user1", " ", " ");
let user2 = new User("user2", " ", " ");
let book1 = new Borrowable("book1", 2);
let book2 = new Borrowable("book2", 2);
let book3 = new Borrowable("book3", 2);

report.addUser(user1);
report.addUser(user2);

user1.borrowBook(book2);
user1.borrowBook(book3);
user2.borrowBook(book1);

report.consoleReport();
