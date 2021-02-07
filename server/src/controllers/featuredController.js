const knex = require('../../../knex/knex');
const AdminHelper = require('../Helper/admin.helper')

module.exports = class FeatureController {

    static uploadApartment(req, res) {
        const {user_id } = req.body;
        knex('featured').insert(req.body).returning('*')
            .then(featured => {
                if (featured.length > 0) {
                    AdminHelper.sendFeaturedUpload({
                        userid: user_id,
                        notification: 'Important',
                    });
                    res.json({
                        status: 200,
                        message: 'Uploaded',
                        featured
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'Upload Error!',
                        featured
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: 'Error',
                    error: err
                })
            })
    }

    static getAllFeatured(req, res) {
        knex.select('*').from('featured').returning('*')
            .then(allFt => {
                if (allFt.length > 0) {
                    res.json({
                        message: null,
                        status: 200,
                        allFt
                    })
                } else {
                    res.json({
                        status: 200,
                        messae: "Error loading Apartments"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: 'Error',
                    error: err
                })
            })
    }

    static deletFeatured(req, res) {
        const { featured_id } = req.params;
        knex.select('*').from('featured').where({ id: featured_id }).del().returning('*')
            .then(deleted => {
                if (deleted.length > 0) {
                    res.json({
                        status: 200,
                        message: 'Deleted',
                        deleted
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'Delete Error',
                        deleted
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: 'Error',
                    error: err
                })
            })
    }

}
