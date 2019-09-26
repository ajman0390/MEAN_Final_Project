  // Create User Model Class
  export class User {
    // properties
    public userId: number;
    public userName: string = '';
    public emailAddress: string = '';
    public password: string = '';
    public is_Admin: boolean = false;
    
    constructor(userId: number, userName: string, emailAddress: string, password: string, is_Admin: boolean) {
      this.userId = userId;
      this.userName = userName;
      this.emailAddress = emailAddress;
      this.password = password;
      this.is_Admin = is_Admin;
    }
  }