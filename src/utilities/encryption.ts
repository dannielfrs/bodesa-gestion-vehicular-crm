import CryptoJS from 'crypto-js'

export const encrypt = (value: any, secretKey = process.env.NEXT_PUBLIC_SECRET_KEY as string) => {
  return CryptoJS.AES.encrypt(value, secretKey).toString()
}

export const decrypt = (ciphertext: any, secretKey = process.env.NEXT_PUBLIC_SECRET_KEY as string) => {
  ciphertext = ciphertext == null ? '' : ciphertext
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
