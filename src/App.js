import React from 'react';
import Subscription from './components/Subscription';
import Join from './components/Join';
import Whyus from './components/Whyus';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);





const App = props => {


  return (
      <div className="pricing">
        
        <div className="container">
            <div className="row">
              <div className="col-12">
                <Join />
              </div>
            </div>
            
            <div className="row no-gutters">
                <div className="col-12 col-md-6">
                    <Subscription />
                </div>
            
                <div className="col-12 col-md-6">
                      <Whyus />
                </div>
            </div> 
          
        </div>
      </div>     
  );
}

export default App;
