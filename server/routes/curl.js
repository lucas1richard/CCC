const router = require('express').Router();
const axios = require('axios');
const { isURL } = require('validator');

module.exports = router;

router.post('/curl', (req, res, next) => {
  let {url} = req.body;

  if (url.slice(0, 7) !== 'http://' && url.slice(0, 8) !== 'https://') {
    url = 'http://' + url;
  }

  if (!isURL(url)) {
    next(new Error('Not a valid URL'));
  }

  axios
    .get(url)
    .then(({data}) => res.send(data))
    .catch(next);
});
