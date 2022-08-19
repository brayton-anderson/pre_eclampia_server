module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/querydatabase',
            handler: 'querydatabase.index',
        },
        {
            method: 'GET',
            path: '/querydatabase',
            handler: 'querydatabase.find',
            "config":{
                "policies":[]
            }
        },
        // {
        //     method: 'GET',
        //     path: '/querydatabase/count',
        //     handler: 'querydatabase.count',
        //     "config":{
        //         "policies":[]
        //     }
        // },
        {
            method: 'GET',
            path: '/querydatabase/:id',
            handler: 'querydatabase.findOne',
            "config":{
                "policies":[]
            }
        },
    ]
}