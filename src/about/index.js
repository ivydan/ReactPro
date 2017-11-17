/**
 * @Page
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Page from './view/page';
import "./index.less";

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Page />, app);