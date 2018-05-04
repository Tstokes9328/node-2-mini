module.exports = {
    getPlanes: (req, res, next) => {
        const dbInstance = req.app.get('db')
            
         dbInstance.getPlanes([25])
            .then((planes) => {
                res.status(200).send(planes)
            }).catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }
}