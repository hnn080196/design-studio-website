class ModelView {
  username;
  password;
  get username() {
    return this.username;
  }
  set username(val) {
    this.username = val;
  }

  get password() {
    return this.password;
  }
  set password(val) {
    this.password = val;
  }
}
class ModelRequest {
  username;
  password;
  setUsername(val) {
    this.username = val;
    return this;
  }

  setPassword(val) {
    this.password = val;
    return this;
  }
}

export { ModelView, ModelRequest };
