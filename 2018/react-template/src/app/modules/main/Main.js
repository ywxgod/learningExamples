/**
 * Created by wyin on 05/12 012.
 */
import React, { Component } from 'react';
import mainStyles from './main.scss';

console.log(mainStyles);

export class Main extends Component{

    render(){
        return (
            <div>
                <h1>title</h1>
                <div className={mainStyles.main}>Wyin</div>
                <hr/>
                <div className={mainStyles.main}>{this.props.title}</div>
            </div>
        );
    }

}