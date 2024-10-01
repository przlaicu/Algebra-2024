export default function Component() {
  const user = {
    firstName: 'Lisa',
    lastName: 'Simpson',
    job: 'Saxophone Player',
    age: 8,
    enrolled: true,
    parents: {
      father: 'Homer Simpson',
      mother: 'Marge Simpson',
    },
    hobbies: ['Reading', 'Playing saxophone', 'Environmental activism'],
  };

  function checkSchoolGrade(user) {
    if(user.age <= 18) {
      return 'enroled in elementry school';
    } else {
      return 'not in elementry school';
    }
  }

  return (
  <div>
    <h1>{user.firstName} {user.lastName}</h1>
    <p>Hello {user.firstName} {user.lastName} is {user.age} year(s) old, here passion is {user.job}, 
      and she is currently checkSchoolGrade(user). Great</p>
    <p>Our user has {user.hobbies.length}, they are: {user.hobbies.join(', ')} </p>
    <p>Lisa is still in {checkSchoolGrade(user)}</p>
    <p>Parrents: {user.parents.father} and {user.parents.mother}</p>
    <h1>{checkSchoolGrade(user)}</h1>
  </div>
  );
}
