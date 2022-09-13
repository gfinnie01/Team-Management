const Employee = require("../lib/Employee");
const employee = new Employee('grant', '576', 'grant@gmail.com')
describe("Employee", () => {

});
test('constroctor values of employee object', () => {
    expect(epmployee.name).toBe('grant');
    expect(epmployee.id).toBe('576');
    expect(epmployee.email).toBe('grant@gmail.com');
});

test('do we get a name from getName', ()=>{
    expect(employee.getName()).toBe('grant')
});