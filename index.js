var axios = require("axios");
var Fd = require("form-data");

module.exports = class Memedroid {
  constructor() {
    this.root = "https://appv2.memedroid.com"
  }

  async login(username,password) {
    this.username = username;
    this.password = password;
    var token = await axios({
      url: this.root + '/secure/user/login_by_username',
      method: 'POST',
      data: 'password='+this.password+'&OS=1&device_id=0000000000000000000000000000000000000000000000000000000000000000&username='+this.username+'&version_code=114145610'
    });
    this.token = token.data["login_info"]["access_token"];
    this.rft = token.data["login_info"]["refresh_token"];
    this.uid = token.data["login_info"]["user_id"];
    return this.token;
  }
}
