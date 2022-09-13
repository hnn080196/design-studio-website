const PATH = {
  HOME: "/",
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
class Enums {
  static get PATH() {
    return PATH;
  }
}
export default Enums;
