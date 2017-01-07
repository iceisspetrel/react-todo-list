import BaseComponent from './BaseComponent.jsx';

export default class TodoPromis extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            checked : false
        }
    }

    onTodoDrag (e) {
        console.log(555);
    }

    onTodoDrop (e) {
        debugger;
    }

    render () {
        return (
            <section id={'todo_promis_' + this.props.id}>
                <div className="todo-list">
                    <h2>正在进行<span className="count">{this.props.list.length}</span></h2>
                    <ul>
                        {
                            this.props.list.map((function(item, i){
                                return (
                                    <li dragbble={true} onDragOver={e => console.log('over')} onDrag={e => this.onTodoDrag(e)} onDrop={e => this.onTodoDrop(e)} title={item.todo} key={i} className="promis">
                                        <span className="lt-icon"></span>
                                        <input checked={this.state.checked} type="checkbox" onChange={() => {this.props.resolveTodo(item, i)}}/>
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
