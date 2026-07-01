export const userRepositoryMock = {
  createUser: jest.fn(),
  createEmployee: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  findByEmail: jest.fn(),
  update: jest.fn(),
  updateEmployee: jest.fn(),
  delete: jest.fn(),
  deleteEmployee: jest.fn(),
};

export function resetMocks(mock: object) {
  Object.values(mock).forEach((fn) => {
    if (jest.isMockFunction(fn)) {
      fn.mockReset();
    }
  });
}
