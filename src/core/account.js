// Commented by sabrym[27/10/2016] The purpose of the account class is to
// bind any account related data sent in by the server upon successful authentication
// and make use of it within the scope of the application
export default class account {
  constructor(dto) {
    this.userName = dto.UserName;
    this.employeeId = dto.EmployeeId;
  }
}
