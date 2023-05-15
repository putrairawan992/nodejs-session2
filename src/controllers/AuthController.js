const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.loginPage = (req, res) => {
    return res.render('login', {
        msg: req.flash('msg')
    })
}

exports.loginAction = async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username }, raw: true, nest: true })

    if (user == null) {
        req.flash('msg', 'User tidak ditemukan!')
        return res.redirect('/login')
    }

    const validatePassword = await bcrypt.compare(req.body.password, user.password)
    if (!validatePassword) {
        req.flash('msg', 'Password salah!')
        return res.redirect('/login')
    }

    // implement session login
    req.session.userId = user.id
    req.session.userRole = user.role

    return res.redirect('/documents')
}

exports.logoutAction = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/documents', { msg: "Ups Terjadi kesalahan" })
        }
        return res.redirect('/login')
    });
}