const getHomePage = (req, res) => {
  // Call models (if needed)
  res.send('Hello World to duy hoang!');
};

const getABC = (req, res) => {
  res.send('Hello ABC!');
};

const getSample = (req, res) => {
  res.render('sample.ejs');
};

export { getHomePage, getABC, getSample };