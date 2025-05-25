import { Images } from "../Constant/images";



export const upcomingAppointments = [
    {
      day: 'Thursday',
      appointments: [
        { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: Images.injectionImage },
        { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: Images.eyeImage }
      ]
    },
    {
      day: 'Saturday', 
      appointments: [
        { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: Images.heartImage },
        { id: 4, title: 'Neurologist', time: '16:00 PM', icon: Images.doctorImage}
      ]
    }
  ];