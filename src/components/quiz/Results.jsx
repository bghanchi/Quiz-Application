import React from 'react';
import './pro.css';

 class Results extends React.Component {
   render() {
       var percent = (this.props.score / this.props.questions.length * 100);
     if (percent > 80) {
       var message = 'You did awesome!';
       var x = document.getElementById("happy");
       var imgs = x.getElementsByTagName("img");  
       imgs[0].src="./ima.jpg";
        
      } else if (percent < 80 && percent > 60) {
       var message = 'You did just fine';
     } else {
       var message = 'You did horrible, sorry';
         }
     return (
       <div class="hee" >
        
     <h4 class="u">You got {this.props.score} out of {this.props.questions.length}</h4>
         <h2 class="hip">{percent}% - {message}</h2>
           <a class="hpp" className="btn btn-primary" href="http://localhost:3000/">Take test again</a>
               </div>

    
    );
   }
 }
 
 export default Results;