const add = (str) =>
  str.length > 0
    ? eval(
        str
          .split(",")
          .map((n) => {
            try {
              if (Math.sign(n) < 0) throw "negatives not allowed: " + n;

              return Math.round((n * 100) / 100, 0);
            } catch (err) {
              console.log(err);
            }
          })
          .filter((n) => n > 0 && n <= 1000)
          .join("+")
      )
    : 0;

module.exports = add;
