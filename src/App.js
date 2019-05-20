/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class app extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default app;*/


/*import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import Question from './components/Question';
 
 class App extends Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>React Quiz</h2>
         </div>
         <Question content="What is your favourite food?" />
       </div>
     );
   }
 }
 
 export default App;

*/


import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 class App extends Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
       </div>
  <div>
    
    <div/>  
  
  );
   }
 }
 
 export default App;



/* import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 class App extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
             quiz: this.getData(),
             activeView: null,
             currentQuestionIndex: 0,
             answers: []
         };
 
         this.submitAnswer = this.submitAnswer.bind(this);
     }
     
     render() {
         return (
             <div className="App">
                 <div className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                     <h2 style={{ fontFamily: 'cursive', fontSize: '1.8em' }}>
                         {this.state.quiz.title}
                     </h2>
                 </div>
                 
                 {this.state.activeView === 'quizOverview' &&
                    <QuizDescription
                         quiz={this.state.quiz}
                         showQuizQuestion={this.showQuizQuestion.bind(this, 0)}
                     />
                 }
                 {this.state.activeView === 'quizQuestions' &&
                     <Quizinator
                         submitAnswer={this.submitAnswer}
                         quiz={this.state.quiz}
                         currentQuestionIndex={this.state.currentQuestionIndex}
                         buttonsDisabled={this.state.buttonsDisabled}
                         transitionDelay={this.state.transitionDelay}
                     />
                 }
                 {this.state.activeView === 'quizResults' &&
                     <QuizResults
                         results={this.getResults()}
                         thumbnail={this.state.quiz.thumbnail}
                     />
                 }
             </div>
         );
     };
      componentDidMount() {
         this.showQuizDescription();
     };
 
     getData() {
         var quiz = require('../quiz.json'),
             questions = require('../questions.json');
 
         quiz.questions = questions;
         return quiz;
     };
 
     showQuizDescription() {
         this.setState((prevState, props) => {
             return {
                 activeView: 'quizOverview'
             };
         });
     }
     
     showQuizQuestion(index) {
         console.log(index);
         this.setState((prevState) => {
             return {
                 currentQuestionIndex: index,
                 activeView: 'quizQuestions',
                 buttonsDisabled: false,
                 transitionDelay: 1000
             };
         });
     };
   
     showResults() {
         this.setState((prevState) => {
             return {
                 activeView: 'quizResults'
             };
         });
     }
 
     submitAnswer(answer) {
         var app = this;
 
         // save answer and disable button clicks
         this.setState((prevState) => {
             return {
                 buttonsDisabled: true,
                 answers: Object.assign({ [this.state.currentQuestionIndex]: answer }, prevState.answers)
             };
         });
         
         // pause for question result to show before callback
         window.setTimeout(function () {
 
             // determine if there are any other questions to show or show results
             let nextIndex = app.state.currentQuestionIndex + 1,
                 hasMoreQuestions = (nextIndex < app.state.quiz.numOfQuestions);
 
             (hasMoreQuestions) ? app.showQuizQuestion(nextIndex) : app.showResults();
             
         }, this.state.transitionDelay);
     };
     
     getResults() {
         return this.state.quiz.questions.map((item, index) => {
             return Object.assign({}, item, this.state.answers[index]);
         });
     };
 
 }
 
 class QuizDescription extends React.Component {
     render() {
         let quiz = this.props.quiz;
        let image = quiz.image;
       let htmlDescription = function () { return { __html: quiz.introduction }; };
 
         return (
             <section className="overviewSection">
                 <div className="imageWrapper">
                     <img src={image.filePath} alt={image.altText} />
                 </div>
                 <div className="description" dangerouslySetInnerHTML={htmlDescription()} />
                 <button onClick={this.props.showQuizQuestion}>Begin</button>
             </section>
         );
     };
 }
 
 class Quizinator extends React.Component {
     render() {
         let quiz = this.props.quiz,
             question = this.props.quiz.questions[this.props.currentQuestionIndex],
             htmlQuestion = function () {
                 return { __html: question.question };
             },
             answerButtons = question.answers.map((answer, i) =>
                 <p key={i}><button className={answer.answer} onClick={this.handleClick.bind(this, i)} disabled={this.props.buttonsDisabled}>{answer}</button></p>
         );
 
         return (
             <section className={'quizSection' + (this.props.buttonsDisabled ? ' transitionOut' : '')}>
                 <div className="questionNumber">Question {this.props.currentQuestionIndex + 1} / {quiz.questions.length}</div>
                 <hr />
                 <div className="question">
                     <div dangerouslySetInnerHTML={htmlQuestion()} />
                 </div>
                 <div className="answers">
                     {answerButtons}
                 </div>
             </section>
         );
     }
 
     handleClick(index, event) {
         let question = this.props.quiz.questions[this.props.currentQuestionIndex],
             answer = { value: index + 1, isCorrect: (index + 1 === question.correct) },
             target = event.currentTarget;
 
         this.props.submitAnswer(answer);
 
         target.classList.add('clicked', answer.isCorrect ? 'correct' : 'incorrect');
 
         window.setTimeout(function () {
             target.classList.remove('clicked', 'correct', 'incorrect');
         }, this.props.transitionDelay);
     }
 }
 
 class QuizResults extends React.Component {
     render() {
         const badgeStyle = {
             backgroundImage: `url(${this.props.thumbnail.filePath})`,
             width: this.props.thumbnail.height,
             height: this.props.thumbnail.height,
             lineHeight: this.props.thumbnail.height + 'px'
        };
         
         let numCorrect = 0, score = 0, possibleScore = 0;
 
         this.props.results.forEach((answer) => {
             if (!!answer.isCorrect) {
                 numCorrect += 1;
                 score += ((answer.level || 1) * 10);
             }
            possibleScore += ((answer.level || 1) * 10);
         });
         
         const results = this.props.results.map((item, i) => {
             let questionHtml = function () { return { __html: item.question }; };
             let explanationHtml = function () { return { __html: item.explanation }; };
             let response =
                 (item.isCorrect === true) ?
                     "You correctly answered " :
                 (item.isCorrect === false) ? 
                     `You answered ${item.answers[item.value - 1]}. The correct answer is ` :
                     "The correct answer is ";
 
             return (
                 <li className={"result" + (item.isCorrect ? " correct" : " incorrect")} key={i}>
                     <div className="question" dangerouslySetInnerHTML={questionHtml()} />
                     <div className="response">
                         {response} <b>{item.answers[item.correct - 1]}</b>
                     </div>
                     <p className="explanation">
                         <i dangerouslySetInnerHTML={explanationHtml()} />
                     </p>
                 </li>
             );
         });
 
         return (
             <section className="resultsSection">
                 <h2>Results</h2>
                 <div className="scoring">
                     You got <em>{numCorrect}</em> correct scoring a total of <b>{score}</b> out of a possible <b>{possibleScore}</b>.
                 </div>
                 <div className="badge" style={badgeStyle}>{score}</div>
                 <ol>{results}</ol>
             </section>
         );
     }
 }
 
 export default App; 







/*import React from 'react';
 import BoxScore from './quiz/BoxScore.jsx';
 import QuestionList from './quiz/QuestionList.jsx';
 import Results from './quiz/Results.jsx';
 
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
               text: 'JavaScript Oriented Notation',
             },
             {
               id: 'b',
               text: 'JavaScript Object Notation',
             },
             {
               id: 'c',
               text: 'JavaScript Organic Notation',
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
         }
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
     if (this.state.current > this.state.questions.length) {
       var boxscore = '';
       var results = <Results {...this.state}/>
     } else {
       var boxscore = <BoxScore {...this.state} />
       var results = '';
     }
     return (
       <div>
         {boxscore}
         <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
         {results}
       </div>
     );
  }
 }
 
 export default App;
*/
