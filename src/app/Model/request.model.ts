export class Request {
  constructor(
    creator: string,
    attendees: string[],
    appointmentStartTime: Date,
    appointmentEndTime: Date,
    meetlink: string,
    recordingLink: string,
    prescriptionLinks: string[],
    reportLinks: string[]
  ) {}
}
