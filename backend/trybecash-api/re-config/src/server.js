const app = require('./app');

const port = 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash sendo executada na porta ${port}`);
});
