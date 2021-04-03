export class IndexBussiness {
    newResponse(){
        return new Promise<any>((resolve, reject) => {
           
            resolve({
                status: 200,
                message: 'api v1',
                baseRoute: '/api'
            })
            
        });
    }
}