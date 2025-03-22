const clientService = {
    getAllClients: async () => {
      // Mock data, replace with actual API call
      return [
        { id: 1, name: 'Client One', email: 'client.one@example.com' },
        { id: 2, name: 'Client Two', email: 'client.two@example.com' },
      ];
    },
  
    addClient: async (client) => {
      // Mock data, replace with actual API call
      return { id: Math.random(), ...client };
    },
  
    updateClient: async (client) => {
      // Mock data, replace with actual API call
      return client;
    },
  
    deleteClient: async (clientId) => {
      // Mock data, replace with actual API call
      return clientId;
    },
  };
  
  export default clientService;