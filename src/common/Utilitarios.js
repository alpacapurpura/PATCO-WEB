import JSEncrypt from 'jsencrypt';

export const encriptado = (data) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(process.env.AUDITOR);
  return encrypt.encrypt(data);
};
