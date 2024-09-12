import './App.css';
import uniqueString from 'uniquestring';

import moment from 'moment';

function App() {

  const unique = uniqueString();
  var datum = moment().format('MM DD YYYY, h:mm:ss a');

  return unique;
}

export default App;
