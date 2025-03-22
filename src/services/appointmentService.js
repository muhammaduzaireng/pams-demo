const appointmentService = {
    getAllAppointments: async () => {
      // Mock data, replace with actual API call
      return [
        { id: 1, client: 'Client One', date: '2025-03-22' },
        { id: 2, client: 'Client Two', date: '2025-03-23' },
      ];
    },
  
    addAppointment: async (appointment) => {
      // Mock data, replace with actual API call
      return { id: Math.random(), ...appointment };
    },
  
    updateAppointment: async (appointment) => {
      // Mock data, replace with actual API call
      return appointment;
    },
  
    deleteAppointment: async (appointmentId) => {
      // Mock data, replace with actual API call
      return appointmentId;
    },
  };
  
  export default appointmentService;