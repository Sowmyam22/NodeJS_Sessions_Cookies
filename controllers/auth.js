exports.getLogin = (req, res) => {
  // const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];

  const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res) => {
  // req.isLoggedIn = true; // need to be set globally
  res.setHeader('Set-Cookie', 'isLoggedIn = true')
  res.redirect('/');
}
