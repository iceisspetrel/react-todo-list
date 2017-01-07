import BaseComponent from './BaseComponent.jsx';
import React from 'react';

class TodoHead extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            holder : '添加TODO'
        }
    }

    submit (e) {
        e.keyCode == 13 && e.target.value && (() => {
            this.props.addTodo(e.target.value);
            e.target.value = '';
        })();
    }

    render () {
        return (
            <section id={'todo_head_' + this.props.id}>
                <div className="header-space"></div>
                <div className="header-bg">
                    <div className="header-main">
                        <span className="header-name">{this.props.name}</span>
                        <input type="text" placeholder={this.state.holder} onKeyDown={this.submit.bind(this)} className="header-add" ref="todo"/>
                    </div>
                </div>
            </section>
        );
    }
}

//等同于 React.createClass.propTypes
TodoHead.propTypes = {
    count : React.PropTypes.string
}

//等同于 React.createClass.getDefaultProps
TodoHead.defaultProps = {
    id : Math.random(),
    count : Math.random() + ''
}

export default TodoHead;
