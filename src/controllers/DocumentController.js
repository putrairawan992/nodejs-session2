const Document = require('../models/Document')
const fs = require('fs')
const User = require('../models/User')

exports.index = async (req, res) => {
    const docs = await Document.findAll({ include: User, raw: true, nest: true })

    res.render('index', {
        msg: req.flash('msg'),
        role: req.session.userRole,
        docs: docs
    })
}

exports.saveDoc = async (req, res) => {
    try {
        const data = {
            file: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            id_user: req.session.userId
        }

        await Document.create(data)

        return this.index(req, res)
    } catch (error) {
        if (req.file) {
            fs.unlinkSync(req.file.path)
        }

        return this.index(req, res)
    }
}

exports.deleteDoc = async (req, res) => {
    const findDoc = await Document.findByPk(req.params.id, { raw: true, nest: true })
    if (findDoc == null) return this.index(req, res)

    fs.unlinkSync('public/' + findDoc.file)
    await Document.destroy({ where: { id: req.params.id } })
    return this.index(req, res)
}