//Patrones

function createCompany(
    name,
    street,
    city,
    zip,
    state,
    type,
    taxId,
    currency,
    parentCompany,
){statementns;}


let params = {
    name: 'Levis',
    street: '1 Main Street',
    city: 'Miami',
    zip: '33166',
    state: 'FL',
    type: 'Garments',
    taxId: '98998977-883',
    currency: 'USD',
    isActive: true
}

function createCompany(params){
    var name = params.name;
    var street = params.street;
    var city = params.city;
    console.log(`City: ${city}`);
    console.log(`State: ${params.state}`);
    console.log(`Currency: ${params.currency}`);
}

createCompany(params);