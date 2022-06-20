describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server if serverName is empty", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should append a new table row to serverTbody with correct data", function () {
    submitServerInfo();
    updateServerTable();
    const cells = serverTbody.children[0].cells;

    const [name, earnings] = cells;

    expect(name.innerText).toBe("Alice");
    expect(earnings.innerText).toBe("$0.00");
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = "";
  });
});
