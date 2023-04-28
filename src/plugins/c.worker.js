import { generateAccount } from 'tron-create-address'

let stopFlag = false

self.addEventListener("message", e => {
  const msg = e.data
  const mold = msg[0]
  if (mold == 'begin') {
    console.log('开始计算地址')
    stopFlag = false
    const matchingWords = e.data[1]
    const checkCase = e.data[2]
    let isSuccess = false
    while (!isSuccess && !stopFlag) {
      const r = generateAccount()
      if (checkAddress(r.address, matchingWords, checkCase)) {
        isSuccess = true
        self.postMessage(r)
      }
    }
  }
  if (mold == 'stop') {
    stopFlag = true
  }
})

/** 检查地址 */
function checkAddress(adr, matchingWords, checkCase) {
  const length = matchingWords.length
  const p = adr.slice(-1 * length)
  if (checkCase) {
    if (p == matchingWords) {
      return true
    }
  } else {
    if (p.toUpperCase() == matchingWords.toUpperCase()) {
      return true
    }
  }
  return false
}
