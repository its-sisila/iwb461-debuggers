


/**
 * GET / 
 * Homepage
 */
exports.homepage = async(req, res) => {
  res.render('index', { title: 'Recipe Book - Home' });
}

exports.recipePage = (req, res) => {
  res.render('recipe', { title: 'Dummy Recipe Page' });  // Render 'recipe.ejs'
};
