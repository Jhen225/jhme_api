const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
  return res.json({ projects: [] });
});

router.get('/:id', (req, res) => {
  return res.json({ project: {} });
});

router.post('/', (req, res) => {
  let { title, description, technologies, thumbnail } = req.body;
  console.log();

  let newproject = new Project({ title, description, technologies, thumbnail });
  console.log(newproject);
  console.log();
  newproject
    .save()
    .then(() => res.json({ success: true }))
    .catch(err => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });

  // .error(err => res.status(400).json({success: false, error: err}))
});

router.put('/:id', (req, res) => {
  return res.json({ success: true });
});

router.delete('/:id', (req, res) => {
  return res.json({ success: true });
});

module.exports = router;
