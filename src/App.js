import React from 'react';
import './App.scss';


const App = props => {


  return (
      <div className="pricing">
        
      <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="join">
                <h3 className="join__title">Join our Community</h3>
                <p className="join__conditions">30-day, hassle-free money back guarantee</p>
                <p className="join__text">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills</p>
              </div>
            </div>
          </div>
          
          <div className="row">
              <div className="col-12 col-md-6">
                    <div className="subscription">
                        <h3 className="subscription__title">Monthly Subscription</h3>
                        <div className="subscription__amount">
                          <span className="price">$29</span>
                          <span className="month">per month</span>
                        </div>
                        <p className="subscription__text">Full access for less than $1 a day</p>
                        <button className="subscription__button btn btn-block"> Sign Up</button>
                    </div>  
              </div>
          
              <div className="col-12 col-md-6">
                    <div className="whyus"> 
                      <ul>
                        <li>Tutorials by Industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our Github repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>
                        <li>New videos every week</li>
                      </ul>
                    </div>
              </div>
          </div> 
        
      </div>
      </div>     
  );
}

export default App;
