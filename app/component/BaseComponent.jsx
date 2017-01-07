import React from 'react';
var style = require('../style/common.css');

export default class BaseComponent extends React.Component{
    constructor (props) {
        super(props);
        this.initReact((0, 1, 2, 3, 4, 5, window || global));
        //加载类对应的样式文件  样式文件名必须和组件名一致
        require('../style/' + this.__proto__.constructor.name + '.css');
    }

    initReact (global) {
        if(!global.React){
            global.React = React;
        }
    }
}
