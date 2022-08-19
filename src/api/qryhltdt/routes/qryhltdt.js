module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/qryhltdt',
            handler: 'qryhltdt.index',
        },
        {
            method: 'GET',
            path: '/qryhltdt',
            handler: 'qryhltdt.find',
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
            path: '/qryhltdt/:id',
            handler: 'qryhltdt.findMany',
            "config":{
                "policies":[]
            }
        },
    ]
}