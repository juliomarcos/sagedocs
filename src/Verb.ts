type Verb = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'CONNECT' | 'OPTIONS';
let Crud: Array<Verb> = ['GET', 'POST', 'PUT', 'DELETE'];

export {
    Verb,
    Crud
}