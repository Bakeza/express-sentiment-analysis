import { checkForName } from "../nameChecker";

describe("checkForName", () => {
  beforeEach(() => {
    global.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should alert 'Welcome, Captain!' for a valid captain name", () => {
    const validName = "Picard";
    checkForName(validName);
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");
  });

  it("should alert 'Enter a valid captain name' for an invalid captain name", () => {
    const invalidName = "Spock";
    checkForName(invalidName);
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");
  });
});
