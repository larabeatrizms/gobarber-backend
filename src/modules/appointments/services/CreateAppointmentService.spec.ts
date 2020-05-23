import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointnent', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123234',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123234');
  });

  // it('should not be able to create two appointnents on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
