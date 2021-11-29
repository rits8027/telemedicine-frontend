export class Prescription {
  constructor(
    public appointmentId: string,
    public description: string,
    public diagnosis: string,
    public medicines: string[],
    public tests: string[]
  ) {}
}
