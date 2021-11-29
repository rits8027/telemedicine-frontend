export class Appointment {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public from: string,
    public to: string,
    public completed: boolean
  ) {}
}
