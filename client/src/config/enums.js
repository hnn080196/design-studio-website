const PATH = {
  HOME: "/",
  LOGIN: "/login",
  ADMIN: {
    _: "/admin",
    PROJECT: "project"
  },

  RESIDENTIAL: {
    _: "/residential"
  },
  COMMERCIAL: {
    _: "/commercial"
  },
  ABOUT: "/about-us",
  TEAM: "/team",
  NEWS: "/news",
  CONTACT: "/contacts"
};
const TYPE = {
  RESIDENT: 0,
  COMMERCIAL: 1
};
const TYPE_PARSE = {
  [TYPE.RESIDENT]: "Resident",
  [TYPE.COMMERCIAL]: "Commercial"
};
class Enums {
  static get PATH() {
    return PATH;
  }

  static get TYPE() {
    return TYPE;
  }

  static get TYPE_PARSE() {
    return TYPE_PARSE;
  }
}
export default Enums;
