'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import largeNumber from 'large-number';
//import '../../common';
import './search.scss';
import logo from './images/logo.png';
import { a } from './tree-shaking';
// import * as Sentry from '@sentry/browser';
//
// Sentry.init({dsn: "http://368f8eaa2f08438faf270336ce0994c2@192.168.89.88:9000/3"});

if(false) {
    a();
}
class Search extends React.Component {

   constructor() {
    super(...arguments);
    this.state = {
        Text: null //组件
    };
   }
   //懒加载
    loadComponent() {
      // console.log(window.susan.c);

        import('./text.js').then((Text)=>{
            this.setState({
                Text: Text.default
            })
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999', '1');
//        const funcA = a();
      return <div className="search-text">
        {
            Text ? <Text /> : null
        }
        { addResult }
        搜索文字的内容123 <img src = {logo} onClick = {this.loadComponent.bind(this)}/>
         </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById("root")
);