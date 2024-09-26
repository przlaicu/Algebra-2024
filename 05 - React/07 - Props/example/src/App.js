import './App.css';
import { Comment, Student, University } from './Components';

export default function App() {

  // Definiramo podatke
  const comment = {
    date: new Date(),
    text: 'I love to code in Reacte',
    author: {
      name: 'John Doe',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg'
    }
  }

  return (
    <div>
      <Comment
        date={comment.date}
        author={comment.author}
        text={comment.text}
      />


      <Student
        firstName='Ivana'
        lastName='Horvat'
        age={40}
        uid='12345'
      />

      <University 
        name='Algebra'
        location = 'Zagreb'
        rank = {5}
      />

    </div>
  );
}
