import tokenListModel from "../Models/tokenListModel.js";

export default class tokenListFunction {
  constructor() {
    this.tokenListModel = tokenListModel;
  }
  async removeToken(userToken) {
    try {
      await tokenListModel.findOneAndDelete({ token: userToken });
    } catch (error) {
      console.log("Failed to remove Token\n" + error);
    }
  }
  async addToken(userToken) {
    try {
      await tokenListModel.create({ token: userToken });
    } catch (error) {
      console.log("Failed to addTOken\n" + error);
    }
  }
}
