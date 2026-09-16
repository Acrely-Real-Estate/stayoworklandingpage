// Mock DB client to bypass host npm cache/Prisma issues, but simulate a real database.
// Data is kept in memory and empty by default (no fake data).

const globalForPrisma = globalThis as unknown as {
  mockDb: {
    enquiries: any[];
    admins: any[];
    notes: any[];
  }
};

const mockDb = globalForPrisma.mockDb || {
  enquiries: [],
  admins: [
    // Pre-seed an admin for login since we don't have a real DB
    {
      id: "admin-1",
      email: process.env.ADMIN_EMAIL || "admin@stayoworkstay.com",
      password: process.env.ADMIN_PASSWORD_HASH || "password", // In reality, this would be hashed
      name: "System Admin"
    }
  ],
  notes: []
};

if (process.env.NODE_ENV !== "production") globalForPrisma.mockDb = mockDb;

export const prisma = {
  enquiry: {
    create: async (args: any) => {
      const newRecord = { 
        id: `enq-${Date.now()}`, 
        status: "NEW",
        createdAt: new Date(),
        updatedAt: new Date(),
        ...args.data 
      };
      mockDb.enquiries.push(newRecord);
      return newRecord;
    },
    findMany: async (args: any) => {
      let results = [...mockDb.enquiries];
      if (args?.orderBy?.createdAt === 'desc') {
        results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      }
      return results;
    },
    findUnique: async (args: any) => {
      return mockDb.enquiries.find(e => e.id === args.where.id) || null;
    },
    update: async (args: any) => {
      const idx = mockDb.enquiries.findIndex(e => e.id === args.where.id);
      if (idx !== -1) {
        mockDb.enquiries[idx] = { 
          ...mockDb.enquiries[idx], 
          ...args.data,
          updatedAt: new Date()
        };
        return mockDb.enquiries[idx];
      }
      throw new Error("Record not found");
    },
    count: async (args?: any) => {
      let results = mockDb.enquiries;
      if (args?.where?.status) {
        results = results.filter(e => e.status === args.where.status);
      }
      return results.length;
    }
  },
  admin: {
    findUnique: async (args: any) => {
      return mockDb.admins.find(a => a.email === args.where.email) || null;
    }
  },
  leadNote: {
    findMany: async (args: any) => {
      return mockDb.notes
        .filter(n => n.enquiryId === args.where.enquiryId)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // desc
    },
    create: async (args: any) => {
      const newNote = {
        id: `note-${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...args.data
      };
      mockDb.notes.push(newNote);
      return newNote;
    }
  }
};
