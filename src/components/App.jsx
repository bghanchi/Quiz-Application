import React from 'react';
import BoxScore from './quiz/BoxScore.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';
import logo from '../logo.svg';
import '../App.css';
import ScoreBox from './quiz/ScoreBox.jsx';

 const styles={
     uploadButton:{
         fontSize:50,
         marginTop:10,
        
     }
 };
 

 class App extends React.Component {
   
 
  constructor(props) {
     super(props);
     this.state = {
      questions: [
        {
             
           id: 1,
       text: 'What does JSON stand for',

          choices: [
            {
              id: 'a',
              text:  'JavaScript Oriented Notation',
               
           },
            {
              id: 'b',
              text: 'JavaScript Object Notation',
            },
            {
              id: 'c',
              text: 'JavaScript Organic Notation',
            },
            {
             id: 'd',
             text: 'JavaScript Organic ',
           }
          ],
         correct: 'b'
        },
       {
          id: 2,
          text: 'Which company mantains ReactJS',
          choices: [
            {
              id: 'a',
              text: 'Google',
            },
            {
              id: 'b',
              text: 'Facebook',
            },
            {
              id: 'c',
              text: 'Airbnb',
            },
            {
             id: 'd',
             text: 'Whatapp',
           }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'Is it an antipattern to include props in the getInitialState method of a component?',
          choices: [
            {
              id: 'a',
              text: 'Yes',
            },
            {
              id: 'b',
              text: 'No',
            },
            
        
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'Is ReactJS a framework by itself?',
          choices: [
            {
              id: 'a',
              text: 'Yes',
            },
            {
              id: 'b',
              text: 'No',
            },
          ],
          correct: 'b'
        },
        
      ],



      
      score: 0,
      current: 1
    } 
    
   


   }
   setCurrent(current) {
     this.setState({current});
   }
   setScore(score) {
     this.setState({score});
   }
   
   
 render() {
  const {question} = this.props;
 
  
  if (this.state.current > this.state.questions.length) {
      var boxscore = '';
      var results = <Results {...this.state}/>
    } else {
      var boxscore = <BoxScore {...this.state} />
      var results = '';
      }
      return (
      <div> 
       <div className="App">
         <div className="App-header">
         <h2 style={styles.uploadButton}>
         <img src={logo} className="App-logo" alt="logo" />
         Welcome to quiz
         </h2>
                    </div>
 
       </div>
      
      <div class="box" >
         {boxscore}
         <QuestionList class="hai" setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
         {results}
     </div>
        

  <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="100" />
        </div>
        </div>
    


  

 </div>

     );
  
    
    
  }
 }
 
 export default App;