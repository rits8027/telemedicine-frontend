export class Appointment {
  constructor(
    public id: string,
    public requester: object,
    public doctor: object,
    public start: string,
    public end: string
  ) {}
}
