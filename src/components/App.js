import React, { useState } from 'react';




function App() {
  const [state, setState] = useState({title: '', body: ''});

  let handleChange = (e) => {
    let newValue = {[e.target.name]: e.target.value};
    let newState = {...state, ...newValue};
    setState(newState);
  
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form>
            <div className="from-group">
              <input
                onChange={handleChange}
                type="text"
                name="title"
                className="form-control no-border"
                placerholder="Title..."
                required />
            </div>
            <div className="from-group">
              <textarea
                onChange={handleChange}
                type="text"
                name="body"
                className="form-control no-border"
                placerholder="Body..."
                required />
            </div>
            <div className="from-group">
              <button
                className="btn btn-primary col-sm-12">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
