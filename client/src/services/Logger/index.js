/**
 * Created By Nguyen Cong Thanh on 03/21/2022 17:23.
 *
 * Copyright © 2022, IntelIn. All rights reserved.
 */

import Config from 'Config'

const getTime = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}

class LoggerService {

  static config = new Config().getState()

  static info(content) {
    if (this.config.log.includes('info')) {
      console.info(`[${getTime()}]-[INFO]: \n`, JSON.stringify(content, null, 2))
    }
  }

  static debug(message, content) {
    if (this.config.log.includes('debug')) {
      console.debug(`[${getTime()}]-[DEBUG]: ${message} \n`, JSON.stringify(content, null, 3))
    }
  }

  static trace(content) {
    if (this.config.log.includes('trace')) {
      console.trace(`[${getTime()}]-[TRACE]: \n`, JSON.stringify(content, null, 2))
    }
  }

  static warn(content) {
    if (this.config.log.includes('warn')) {
      console.warn(`[${getTime()}]-[WARN]: \n`, JSON.stringify(content, null, 2))
    }
  }

  static error(content) {
    if (this.config.log.includes('error')) {
      console.error(`[${getTime()}]-[ERROR]: \n`, JSON.stringify(content, null, 2))
    }
  }

  static log(content) {
    if (this.config.log.includes('log')) {
      console.log(`[${getTime()}]-[LOG]: \n`, content)
    }
  }

  static table(content) {
    if (this.config.log.includes('table')) {
      console.table(`[${getTime()}]-[TABLE]: \n`, content);
    }
  }

}

export default LoggerService
