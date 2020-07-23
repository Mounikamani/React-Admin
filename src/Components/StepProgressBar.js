import React from 'react'
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Form1 from './FormPage1';

const step1Content =<h1>Step1</h1>;
const step2Content = <h1>Step 2</h1>;
const step3Content = <h1>Step 3</h1>;
const step4Content = <h1>Step 4</h1>;



function Stepbar() {
  return (

    <div class="app">
        
      <StepProgressBar
        startingStep={0}
       
        steps={[
          {
            label: 'Step 1',
            name: 'step 1',
            content: step1Content
          },
          {
            label: 'Step 2',
            name: 'step 2',
            content: step2Content,
           
          },
          {
            label: 'Step 3',
            name: 'step 3',
            content: step3Content,
          
          },
          {
            label: 'Step 4',
            name: 'step 4',
            content: step4Content
          }
        ]}
      />
    </div>
  );
}

export default Stepbar;

