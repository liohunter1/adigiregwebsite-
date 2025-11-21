// For this static marketing website, we don't need persistent storage
// The contact form will use a mock API endpoint that validates and responds
// In a real implementation, this would store contact submissions in a database

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage needed for contact form mock
  }
}

export const storage = new MemStorage();
