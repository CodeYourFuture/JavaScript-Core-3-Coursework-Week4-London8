const verify = (data) => {
  return data && data.length >= 8 && /[A-Z]/.test(data) && /\d/.test(data)
    ? `Password accepted`
    : `Password rejected`;
};

module.exports = verify;
