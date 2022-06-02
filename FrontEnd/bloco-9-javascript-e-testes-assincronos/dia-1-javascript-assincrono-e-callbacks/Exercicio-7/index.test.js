const uppercase = require ('./index');;
// const callBack = (fraseMaiuscula) => console.log(fraseMaiuscula);
// uppercase('tatakae', callBack)
it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('tatakae', (str) => {
    try {
      expect(str).toBe('TATAKAE');
      done();
    } catch (error) {
      done(error)
    }
  });
});
