export class Appointment {
  constructor(
    public id: string,
    public requester: object,
    public doctor: object,
    public start: Date,
    public end: Date,
    public attendees: [object],
    public prescriptions: [object]
  ) {}
}
