const Manager = require("../lib/Manager");
const manager = new Manager('grant', '576', 'grant@gmail.com', '2001')
describe("Manager", () => {

});
test('constroctor values of employee object', () => {
    expect(manager.name).toBe('grant');
    expect(manager.id).toBe('576');
    expect(manager.email).toBe('grant@gmail.com');
    expect(manager.officeNumber).toBe('2001')
});

test('do we get a name from getName', ()=>{
    expect(manager.getName()).toBe('grant')
});

test('do we get Id from getId', ()=> {
    expect(manager.getEmail()).toBe('grant@gmil.com')
});
test('do we get the office number from getOfficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('2001')
});