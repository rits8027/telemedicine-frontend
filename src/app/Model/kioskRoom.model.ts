export class KioskRoom {
  constructor(
    public _id: string,
    public doctors: [object],
    public attendees: [object],
    public prescripionLinks: object
  ) {}
}
