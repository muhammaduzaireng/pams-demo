const employeeService = {
    getAllEmployees: async () => {
      // Mock data, replace with actual API call
      return [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      ];
    },
  
    addEmployee: async (employee) => {
      // Mock data, replace with actual API call
      return { id: Math.random(), ...employee };
    },
  
    updateEmployee: async (employee) => {
      // Mock data, replace with actual API call
      return employee;
    },
  
    deleteEmployee: async (employeeId) => {
      // Mock data, replace with actual API call
      return employeeId;
    },
  };
  
  export default employeeService;