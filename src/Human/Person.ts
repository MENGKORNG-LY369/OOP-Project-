export abstract class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public age: number,
      public gender: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
      this.gender = gender;
    }
  }