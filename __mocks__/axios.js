const axios = jest.createMockFromModule("axios");
axios.get = jest.fn().mockImplementation((url) => {
  debugger;
  return Promise.resolve(require(`./data${url}.json`));
});

module.exports = axios;
