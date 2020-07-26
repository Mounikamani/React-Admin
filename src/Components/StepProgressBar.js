import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import {Steps} from 'primereact/steps';


export class StepBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
          
        };

        this.items = [
          {
            label:'1',
            command: (event) => {
             
            }
        },
        {
            label: '2',
            command: (event) => {
                
            }
        },

        {
            label: '3',
            command: (event) => {
               
            }
        },
        {
            label: '4',
            command: (event) => {
                
            }
        },

        {
          label: '5',
          command: (event) => {
             
          }
      },
      {
        label: '6',
        command: (event) => {
           
        }
    },
    {
      label: '7',
      command: (event) => {
         
      }
            }
        ];
    }

    render() {
        return (
            <div>
                 <h5>Step 1 of 7</h5>
                <Steps model={this.items} activeIndex={this.state.activeIndex} readOnly={true} />

            </div>
        );
    }
}

export default StepBar; 
