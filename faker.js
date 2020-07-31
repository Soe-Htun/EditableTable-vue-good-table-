var faker= require('faker');
function GenerateEmployess(){
    var fakerEditTable=[];
    for(let id=0; id<= 50; id++){
        var firstName =faker.name.firstName();
        var lastName = faker.name.lastName();
        var city = faker.address.city();
        var date =faker.date.month();
        var phone_no = faker.phone.phoneNumber();
        fakerEditTable.push({
            "id" : id,
            "FirstName" : firstName,
            "LastName": lastName,
            "City" : city,
            "Date" : date,
            "Phone_no" :phone_no,
        })
    }
    return {'fakerEditTable': fakerEditTable}
}
module.exports =GenerateEmployess