function validateRequest(obj) {

    let methodValidation = obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT';
    if (!(obj.hasOwnProperty('method'))){
        throw new Error('Invalid request header: Invalid Method');
    }
    if (methodValidation){
      throw new Error('Invalid request header: Invalid Method');
    }

    let uriPattern = /^[a-zA-Z0-9.*]+$/gm;
    if (!(obj.hasOwnProperty('uri'))){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!(obj.uri).match(uriPattern)){
        throw new Error('Invalid request header: Invalid URI');
    }

    let versionValidation = obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0';
    if (!(obj.hasOwnProperty('version'))){
        throw new Error('Invalid request header: Invalid Version');
    }
    if (versionValidation){
        throw new Error('Invalid request header: Invalid Version');
    }

    let messagePattern = /^[^<>\\&'"]+$/gm;
    if (!(obj.hasOwnProperty('message'))){
        throw new Error('Invalid request header: Invalid Message');
    }
    if (!(obj.message).match(messagePattern)){
        if (!(obj.message === '')){
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
