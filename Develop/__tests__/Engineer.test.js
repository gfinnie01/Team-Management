const Engineer = require("../lib/Engineer");
const engineer = new Engineer('grant', '576', 'grant@gmail.com', 'grant01' )
describe("Engineer", () => {

});
test('constroctor values of employee object', () => {
    expect(engineer.name).toBe('grant');
    expect(engineer.id).toBe('576');
    expect(engineer.email).toBe('grant@gmail.com');
    expect(engineer.github).toBe('grant01')
});

test('do we get a name from getName', ()=>{
    expect(engineer.getName()).toBe('grant')
});

test('do we get Id from getId', ()=> {
    expect(engineer.getEmail()).toBe('grant@gmail.com')
});
test('do we get the github number from getGithub', () => {
    expect(engineer.getGithub()).toBe('grant01')
});