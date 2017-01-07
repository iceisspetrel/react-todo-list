import BaseComponent from './BaseComponent.jsx';

class TodoResolve extends BaseComponent{

    constructor (props) {
        super(props);
        this.state = {
            checked : true
        }
    }

    render () {
        return (
            <section id={'todo_resolve_' + this.props.id}>
                <div className="todo-list">
                    <h2>已经完成<span className="count">{this.props.list.length}</span></h2>
                    <ul>
                        {
                            this.props.list.map((function(item, i){
                                return (
                                    <li title={item.todo} key={i} className="resolve">
                                        <span className="lt-icon" title={this.props.ccc}></span>
                                        <input checked={this.state.checked} type="checkbox" onChange={() => {this.props.promisTodo(item, i)}}/>
                                        {item.todo}
                                        <span className="remove-icon" onClick={() => {this.props.removeTodo(item, i)}}></span>
                                    </li>
                                );
                            }).bind(this))
                        }
                    </ul>
                </div>
            </section>
        );
    }
}

export default TodoResolve;
