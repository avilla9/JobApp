import React, { useState, useEffect } from "react";
import './App.css';

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue !== null ? persistedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default function App() {

  const [mode, setMode] = useLocalStorageState('mode', 'light');

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  function changeMode(event) {
    let mode = event.target.value;
    if (mode === 'lightMode') {
      setMode('darkMode');
    } else {
      setMode('lightMode');
    }
  }


  /* const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("DARK_MODE"));
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]); */
  return (
    <div className="App">
      <button className="switchMode" value={mode} onClick={changeMode}>
        {mode === 'darkMode' ? "Off" : "On"}
      </button>
      <div className="leftPanel">
        <div className="jobContainer">
          <form>
            <h2>Post a Job</h2>
            <input className="jobForm" type="text" name="title" placeholder="Title" />
            <textarea className="jobForm descriptionArea" name="description" placeholder="Description"></textarea>
            <input className="jobForm" type="text" name="skill" placeholder="Skill" />
            <input className="jobForm" type="text" name="skill" placeholder="Skill" />
            <input className="jobForm" type="text" name="skill" placeholder="Skill" />
            <input className="jobForm" type="text" name="skill" placeholder="Skill" />
            <input className="jobForm" type="text" name="skill" placeholder="Skill" />
            <button className="addSkill">+</button>
            <button className="submitForm">Save</button>
          </form>
        </div>
        <div className="skillsContainer">
          <h2>Most Used Skills</h2>
          <ul>
            <li>Groundhog</li>
            <li>Silkworm</li>
            <li>Cockscomb Cup Coral</li>
            <li>Butterfly</li>
            <li>American Alligator</li>
          </ul>
        </div>
      </div>
      <div className="rightPanel">
        <div className="jobDetails">
          <h2 className="title">Job Title</h2>
          <div className="skills">
            <span>Bison</span>
            <span>Ostrich</span>
            <span>Possum</span>
            <span>Caracal</span>
            <span>Cats</span>
            <span>Bustard</span>
          </div>
          <p><strong>Description:</strong></p>
          <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>
        </div>
        <div className="jobList">
          <h2>Job List</h2>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
          <div className="jobElement">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
        </div>
      </div>
    </div>
  );
}