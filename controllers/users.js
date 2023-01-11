const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username });
        const registeredUser = await User.register(user, password);
        // login user after registration using passport helper method
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Flashcards!');
            res.redirect('/cardSets');
        })

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register')
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/cardSets';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash('success', 'Logged out!');
        res.redirect('/cardSets');
    })
}