const Employee = require('../lib/Employee');
const employee = new Employee('grant', '576', 'grant@gmail.com');

test('constroctor values of employee object', () => {
    expect(employee.name).toBe('grant');
    expect(employee.id).toBe('576');
    expect(employee.email).toBe('grant@gmail.com');
});

test('do we get a name from getName', ()=>{
    expect(employee.getName()).toBe('grant')
});

test('do we get Id from getId', ()=> {
    expect(employee.getEmail()).toBe('grant@gmail.com')
});