export class Aluno {
  private id!: string;
  private studentsFullName: string;
  private studentsBirthDate: string;
  private studentsCpf: string;
  private studentsGender: string;
  private studentsGuardianName: string;
  private studentsGuardianCPF: string;
  private studentsAddress: string;
  private participatesAuxilioBrasil: boolean;
  private studentGrade!: {
    id: string;
    gradeName: string;
    gradeMinimumDate: Date;
    gradeMaximumDate: Date;
  };
  private studentServiceStatus!: string;

  constructor(
    studentsFullName: string,
    studentsBirthDate: string,
    studentsCpf: string,
    studentsGender: string,
    studentsGuardianName: string,
    studentsGuardianCPF: string,
    studentsAddress: string,
    participatesAuxilioBrasil: boolean
  ) {
    this.studentsFullName = studentsFullName;
    this.studentsBirthDate = studentsBirthDate;
    this.studentsCpf = studentsCpf;
    this.studentsGender = studentsGender;
    this.studentsGuardianName = studentsGuardianName;
    this.studentsGuardianCPF = studentsGuardianCPF;
    this.studentsAddress = studentsAddress;
    this.participatesAuxilioBrasil = participatesAuxilioBrasil;
  }

  public get _id(): string {
    return this.id;
  }

  public set _id(value: string) {
    this.id = value;
  }

  public get _studentsFullName(): string {
    return this.studentsFullName;
  }

  public set _studentsFullName(value: string) {
    this.studentsFullName = value;
  }

  public get _studentsBirthDate(): string {
    return this.studentsBirthDate;
  }

  public set _studentsBirthDate(value: string) {
    this.studentsBirthDate = value;
  }

  public get _studentsCpf(): string {
    return this.studentsCpf;
  }

  public set _studentsCpf(value: string) {
    this.studentsCpf = value;
  }

  public get _studentsGender(): string {
    return this.studentsGender;
  }

  public set _studentsGender(value: string) {
    this.studentsGender = value;
  }

  public get _studentsGuardianName(): string {
    return this.studentsGuardianName;
  }

  public set _studentsGuardianName(value: string) {
    this.studentsGuardianName = value;
  }

  public get _studentsGuardianCPF(): string {
    return this.studentsGuardianCPF;
  }

  public set _studentsGuardianCPF(value: string) {
    this.studentsGuardianCPF = value;
  }

  public get _studentsAddress(): string {
    return this.studentsAddress;
  }

  public set _studentsAddress(value: string) {
    this.studentsAddress = value;
  }

  public get _participatesAuxilioBrasil(): boolean {
    return this.participatesAuxilioBrasil;
  }

  public set _participatesAuxilioBrasil(value: boolean) {
    this.participatesAuxilioBrasil = value;
  }

  public get _studentGrade(): {
    id: string;
    gradeName: string;
    gradeMinimumDate: Date;
    gradeMaximumDate: Date;
  } {
    return this.studentGrade;
  }

  public set _studentGrade(value: {
    id: string;
    gradeName: string;
    gradeMinimumDate: Date;
    gradeMaximumDate: Date;
  }) {
    this.studentGrade = value;
  }

  public get _studentServiceStatus(): string {
    return this.studentServiceStatus;
  }

  public set _studentServiceStatus(value: string) {
    this.studentServiceStatus = value;
  }
}
