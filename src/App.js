import {useState} from 'react'; 
import './App.css';
import Popup from './popup';
import SearchBar from './searchBar';
import TextField from "@material-ui/core/TextField";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const updateInput = async (input) => {
    setInput(input);
 }

 const [name, setName] = useState("");

  return (
    <table>

      <tr>
        <th>
          <div className='rectangle1'>
            <table>
              <tr>

                <th>
                  <div className='whole1'><img src='whole.png'/></div>
                </th>

                <th>
                  <div className='rectangle11'>
                  <SearchBar 
                    input={input} 
                    onChange={updateInput}
                  />
                  </div>
                </th>

                <th>
                  <div className='rectangle12'>
                  <input
                      type="button"
                      value="It's free!"
                      onClick={togglePopup}
                    />
                  </div>
                </th>

              </tr>
            </table>
          </div>
        </th>
      </tr>

      <tr>
        <div className='rectangle2'>
          <img src = 'Rectangle 2.png' alt = 'Error'/>
          <div className='textOnimage1'>
            <p>Computer Engineering</p>
          </div>
          <div className='textOnimage2'>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </tr>

      <tr>
        <hr></hr>
      </tr>

      {isOpen && <Popup
      content={<>
      <div className='top'>Let's learn,share & inspire each other with our passion for computer engineering. Sign up now</div>
      <br></br>
      <br></br>
        <div className='link'>Already have an account? <a href=''>Sign In</a></div>
        <b>Create Account</b>
        <br></br>
        
        <table>
          <tr>
            <th>
              <TextField
                value={name}
                label="First Name"
                onChange={(e) => {
                setName(e.target.value);
                }}
              />
            </th>
            <th>
              <TextField
                value={name}
                label="Last Name"
                onChange={(e) => {
                setName(e.target.value);
                }}
              />
            </th>
          </tr>

          <tr>
           <td colSpan='2'><TextField
              value={name}
              label="Email"
              onChange={(e) => {
              setName(e.target.value);
              }}
            /></td>
          </tr>
          
          <tr>
           <td colSpan='2'><TextField
              value={name}
              label="password"
              onChange={(e) => {
              setName(e.target.value);
              }}
            /></td>
          </tr>

          <tr>
           <td colSpan='2'><TextField
              value={name}
              label="confirm password"
              onChange={(e) => {
              setName(e.target.value);
              }}
            /></td>
          </tr>
        </table>
        <div className='submit'>Create Account</div>
      </>}
      handleClose={togglePopup}
      />}
    </table>

  
    
  );
}

export default App;