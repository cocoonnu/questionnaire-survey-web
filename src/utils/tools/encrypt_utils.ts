import { enc, AES, pad, SHA1, mode } from 'crypto-js'

/** 获取加密Key */
export const getSha1Key = (key: string) => {
  let realKey = SHA1(key)
  realKey = SHA1(realKey).toString().substring(0, 32) // 真正的key
  return realKey
}

/**
 * 基于SHA1PRNG解密方法，返回解密后的内容
 * @isDecodeURI 是否需要解码后，在解密
 */
export const aesSha1Eecrypt = (data: string, key: string, isDecodeURI = true) => {
  const realKey = getSha1Key(key)
  let newData = data
  if (isDecodeURI) {
    newData = decodeURIComponent(data)
  }
  const decrypt = AES.decrypt(
    {
      ciphertext: enc.Base64.parse(newData),
    },
    enc.Hex.parse(realKey),
    {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    },
  )
  return decrypt.toString(enc.Utf8)
}

export const encodePassword = (password) => {
  const base = new Base64()
  const result = base.encode(password)
  return result
}

// 加密、解密算法封装：
export function Base64() {
  // private property
  const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  // private method for UTF-8 encoding
  const _utf8_encode = function (string) {
    string = `${string}`?.replace(/\r\n/g, '\n')
    let utftext = ''
    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n)
      if (c < 128) {
        utftext += String.fromCharCode(c)
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192)
        utftext += String.fromCharCode((c & 63) | 128)
      } else {
        utftext += String.fromCharCode((c >> 12) | 224)
        utftext += String.fromCharCode(((c >> 6) & 63) | 128)
        utftext += String.fromCharCode((c & 63) | 128)
      }
    }
    return utftext
  }

  // private method for UTF-8 decoding
  const _utf8_decode = function (utftext) {
    let string = ''
    let i = 0
    let c = 0
    // c1 = 0,
    let c2 = 0
    while (i < utftext.length) {
      c = utftext.charCodeAt(i)
      if (c < 128) {
        string += String.fromCharCode(c)
        i++
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1)
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
        i += 2
      } else {
        c2 = utftext.charCodeAt(i + 1)
        const c3 = utftext.charCodeAt(i + 2)
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
        i += 3
      }
    }
    return string
  }

  // public method for encoding
  this.encode = function (input) {
    let output = ''
    let chr1
    let chr2
    let chr3
    let enc1
    let enc2
    let enc3
    let enc4
    let i = 0
    input = _utf8_encode(input)
    while (i < input.length) {
      chr1 = input.charCodeAt(i++)
      chr2 = input.charCodeAt(i++)
      chr3 = input.charCodeAt(i++)
      enc1 = chr1 >> 2
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
      enc4 = chr3 & 63
      if (isNaN(chr2)) {
        enc3 = enc4 = 64
      } else if (isNaN(chr3)) {
        enc4 = 64
      }
      output =
        output +
        _keyStr.charAt(enc1) +
        _keyStr.charAt(enc2) +
        _keyStr.charAt(enc3) +
        _keyStr.charAt(enc4)
    }
    return output
  }

  // public method for decoding
  this.decode = function (input) {
    let output = ''
    let chr1
    let chr2
    let chr3
    let enc1
    let enc2
    let enc3
    let enc4
    let i = 0
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++))
      enc2 = _keyStr.indexOf(input.charAt(i++))
      enc3 = _keyStr.indexOf(input.charAt(i++))
      enc4 = _keyStr.indexOf(input.charAt(i++))
      chr1 = (enc1 << 2) | (enc2 >> 4)
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
      chr3 = ((enc3 & 3) << 6) | enc4
      output += String.fromCharCode(chr1)
      if (enc3 != 64) {
        output += String.fromCharCode(chr2)
      }
      if (enc4 != 64) {
        output += String.fromCharCode(chr3)
      }
    }
    output = _utf8_decode(output)
    return output
  }
}
