exports.auth = (req, res, next) => {
    if (!req.session.userId) {
        return res.render('login', { msg: 'Anda belum login!' })
    }
    next()
}

exports.guest = (req, res, next) => {
    if (req.session.userId && req.session.userRole) {
        return res.render('index', { role: req.session.userRole, msg: req.flash('msg') })
    }
    return res.render('login', { msg: req.flash('msg') })
}