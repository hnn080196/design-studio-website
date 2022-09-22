/**
 * Created By Nguyen Cong Thanh on 03/21/2022 17:19.
 *
 * Copyright © 2022, IntelIn. All rights reserved.
 */

// import Localize from 'service/localize'
import CryptoJS from "crypto-js";

class HelperService {
  static isEmpty(value) {
    try {
      if (typeof value === "undefined" || value === null || value === "" || value.length === 0 || value === "[]") {
        return true;
      }
      return false;
    } catch (e) {
      return true;
    }
  }

  static isArray(value) {
    try {
      if (Array.isArray(value)) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  static hashMD5(string = "") {
    return CryptoJS.MD5(string).toString();
  }

  // static hashSHA256(string) {
  //   return CryptoJS.SHA256(string).toString();
  // }

  // static hashRSA(password) {
  //   const encrypt = new JSEncrypt();
  //   encrypt.setPublicKey(this.config.rsaKey);
  //   return encrypt.encrypt(password);
  // }

  static generateKey() {
    return this.hashMD5(
      this.hashMD5(
        `${new Date().getTime()}-${Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)}-${Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)}-${new Date().getTime()}`
      )
    );
  }

  static encodeBase64(string) {
    return btoa(
      encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode("0x" + p1);
      })
    );
  }

  static decodeBase64(string) {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  static getDate(time) {
    try {
      if (!this.isEmpty(time)) {
        const date = new Date(time);
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        return `${day}/${month}/${date.getFullYear()}`;
      }
      throw ``;
    } catch (e) {
      return null;
    }
  }

  static delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  static clearVietnamese(str) {
    try {
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      return str;
    } catch (e) {
      return str;
    }
  }

  static getFullDateTime(time) {
    try {
      if (!this.isEmpty(time)) {
        const date = new Date(time);
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        return `${hours}:${minutes}:${seconds} - ${day}/${month}/${date.getFullYear()}`;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  static getDate(time) {
    try {
      if (!this.isEmpty(time)) {
        const date = new Date(time);
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        return `${day}/${month}/${date.getFullYear()}`;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  static getUTCDate(time) {
    try {
      const date = new Date(time);
      const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
      const month = date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;
      return `${day}/${month}/${date.getUTCFullYear()}`;
    } catch (e) {
      return null;
    }
  }

  static getTimeByMilliseconds(time) {
    try {
      let t = time / 1000;
      let h = Math.floor(t / 3600);
      t = t - h * 3600;
      let m = Math.floor(t / 60);
      t = t - m * 60;
      let s = Math.floor(t);
      return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
    } catch (e) {
      return null;
    }
  }

  // static parseDateUtc(timestamp) {
  //   let time = new Date(timestamp);
  //   time.setUTCHours(0);
  //   time.setUTCMinutes(0);
  //   time.setUTCSeconds(0);
  //   time.setUTCMilliseconds(0);
  //   return time.getTime();
  // }

  // static formatCurrency(amount, thousands = ".", decimal = ",", decimalCount = 2) {
  //   decimalCount = Math.abs(decimalCount);
  //   decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  //   const negativeSign = amount < 0 ? "-" : "";
  //   let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
  //   let j = i.length > 3 ? i.length % 3 : 0;
  //   return (
  //     negativeSign +
  //     (j ? i.substr(0, j) + thousands : "") +
  //     (
  //       i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
  //       (decimalCount
  //         ? decimal +
  //           Math.abs(amount - i)
  //             .toFixed(decimalCount)
  //             .slice(2)
  //         : "")
  //     ).replace(",00", "")
  //   );
  // }

  // static convertFileToBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // }

  // static formatDate(time) {
  //   const temp = time.toString().split("/"); // dd/MM/YYYY
  //   return new Date(`${temp[2]}/${temp[1]}/${temp[0]}`).getTime();
  // }

  // // static checkLinkImage(value) {
  // //   const regex = new RegExp(/^(https?:\/\/[^\s]+)$/)
  // //   if (regex.test(value)) {
  // //     return value
  // //   }
  // //   return null
  // // }

  // static cloneNewModel(model) {
  //   return JSON.parse(JSON.stringify(model));
  // }

  // static deleteFieldEmpty(object) {
  //   Object.keys(object).forEach((key) => (this.isEmpty(object[key]) ? delete object[key] : {}));
  //   return object;
  // }

  // static omitFieldNullish(obj) {
  //   return Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null && value !== ""));
  // }

  // static deepEqual(obj1, obj2) {
  //   const keys1 = Object.keys(obj1);
  //   const keys2 = Object.keys(obj2);
  //   if (keys1.length !== keys2.length) {
  //     return false;
  //   }
  //   for (const key of keys1) {
  //     const val1 = obj1[key];
  //     const val2 = obj2[key];
  //     const areObjects = this.isObject(val1) && this.isObject(val2);
  //     if ((areObjects && !this.deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // static isObject(obj) {
  //   return obj != null && typeof obj === "object";
  // }

  // static isObjectsEqual = (o1, o2) => {
  //   return Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every((p) => o1[p] === o2[p]);
  // };

  // static isArraysEqual = (a1, a2) => {
  //   return a1.length === a2.length && a1.every((o, idx) => this.isObjectsEqual(o, a2[idx]));
  // };

  // static deepDiff = (base, other) => {
  //   const diffParams = {};
  //   for (const p in other) {
  //     if (!compareValue(other[p] && other[p], base[p] && base[p])) {
  //       diffParams[p] = other[p];
  //     }
  //   }

  //   function compareValue(val1, val2) {
  //     let isSame = true;
  //     for (const p in val1) {
  //       if (typeof val1[p] === "object") {
  //         const objectValue1 = val1[p],
  //           objectValue2 = val2[p];
  //         for (const value in objectValue1) {
  //           isSame = compareValue(objectValue1[value], objectValue2[value]);
  //           if (isSame === false) {
  //             return false;
  //           }
  //         }
  //       } else {
  //         if (val1 !== val2) {
  //           isSame = false;
  //         }
  //       }
  //     }
  //     return isSame;
  //   }

  //   return diffParams;
  // };

  // static toString(o) {
  //   Object.keys(o).forEach((k) => {
  //     if (typeof o[k] === "object") {
  //       return this.toString(o[k]);
  //     }
  //     o[k] = "" + o[k];
  //   });
  //   return o;
  // }

  // static convertMoney(num) {
  //   return num.toLocaleString("it-IT", { style: "currency", currency: "VND" }).slice(0, -3);

  //   // use to add .VND ( e.g 1.000.000 VND )
  //   // return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  // }

  // static makeId = (length) => {
  //   let result = "";
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // };

  // static generateUniqueRandom(maxNr, existed) {
  //   let random = (Math.random() * maxNr).toFixed();
  //   random = Number(random);
  //   if (!existed.includes(random)) {
  //     existed.push(random);
  //     return random;
  //   } else {
  //     if (existed.length < maxNr) {
  //       return this.generateUniqueRandom(maxNr);
  //     } else {
  //       // console.log("No more numbers available.");
  //       return false;
  //     }
  //   }
  // }

  // static debounce(callback, interval) {
  //   let debounceTimeoutId;
  //   return function (...args) {
  //     clearTimeout(debounceTimeoutId);
  //     debounceTimeoutId = setTimeout(() => callback.apply(null, args), interval);
  //   };
  // }

  // static renderStringJSONparse(string, replaceString = "", callback) {
  //   try {
  //     const json = JSON.parse(string);
  //     return callback(json);
  //   } catch (e) {
  //     return replaceString;
  //   }
  // }

  // static renderString(string, replaceString = "", callback) {
  //   try {
  //     return callback(string);
  //   } catch (e) {
  //     return replaceString;
  //   }
  // }

  // static isJSON(str) {
  //   try {
  //     return !!(JSON.parse(str) && str);
  //   } catch (e) {
  //     return false;
  //   }
  // }
  // static isJSON2(str, replace = "") {
  //   try {
  //     // return !!(JSON.parse(str) && str);
  //     const rs = JSON.parse(str);
  //     return rs;
  //   } catch (e) {
  //     return replace;
  //   }
  // }

  // static getLabelLicense(type) {
  //   const licenses = {
  //     9: Enums.BACKOFFICE_LICENSE_OPTIONS[0],
  //     8: Enums.BACKOFFICE_LICENSE_OPTIONS[2],
  //     12: Enums.BACKOFFICE_LICENSE_OPTIONS[1],
  //     default: "Số giấy tờ không hợp lệ"
  //   };
  //   return licenses[type] || licenses["default"];
  // }
  // static mapEnums(enums, enumsParse) {
  //   return Object.values(enums).map((value) => ({
  //     text: enumsParse[value],
  //     value: value
  //   }));
  // }
  // static filterObjectFromArrayByValue(data, keys, values) {
  //   return data.filter((e) => {
  //     return keys.every((a) => {
  //       return values.includes(e[a]);
  //     });
  //   });
  // }
  // static convertImage(string, multiple = false) {
  //   try {
  //     const domainImage = this.config.hostStaticResource;
  //     if (multiple) {
  //     }
  //     return `${domainImage}${string}`;
  //   } catch (e) {}
  // }
  // static isBase64(string) {
  //   try {
  //     const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  //     return base64regex.test(string);
  //   } catch (e) {}
  // }
}

export default HelperService;
