export class Appointment {
  constructor(
    public id: String,
    public name: String,
    public image: String,
    public from: String,
    public to: String,
    public completed: boolean
  ) {}
}
