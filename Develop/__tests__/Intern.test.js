const Intern = require("../lib/Intern");
const intern = new Intern('grant', '576', 'grant@gmail.com', 'grants university' )
describe("Intern", () => {

});
test('constroctor values of employee object', () => {
    expect(intern.name).toBe('grant');
    expect(intern.id).toBe('576');
    expect(intern.email).toBe('grant@gmail.com');
    expect(intern.school).toBe('grants university')
});

test('do we get a name from getName', ()=>{
    expect(intern.getName()).toBe('grant')
});

test('do we get Id from getId', ()=> {
    expect(intern.getEmail()).toBe('grant@gmail.com')
});
test('do we get the school number from getSchool', () => {
    expect(intern.getSchool()).toBe('grants university')
});