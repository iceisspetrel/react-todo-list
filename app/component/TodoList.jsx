import BaseComponent from './BaseComponent.jsx';
import TodoHead from './TodoHead.jsx';
import TodoPromis from './TodoPromis.jsx';
import TodoResolve from './TodoResolve.jsx';
import TodoChart from './TodoChart.jsx';
import util from '../util/util.js';
import _ from 'underscore';

export default class TodoList extends BaseComponent{
    constructor (props) {
        super(props);
        this.state = {
            name : 'TodoList',
            id   : Math.random(),
            promisList : [],
            resolveList : []
        };
        this._listCount = 0;
    }

    get listCount () {
        return this._listCount;
    }

    set listCount (listCount) {
        this._listCount = listCount;
    }

    initState (list) {
        this.setState({
            promisList : list.promisList,
            resolveList : list.resolveList
        });

        var promisListMax = _.max(list.promisList, (item) => {return item.index});
        var resolveListMax = _.max(list.resolveList, (item) => {return item.index});

        this.listCount = (promisListMax.index > resolveListMax.index ? promisListMax.index : resolveListMax.index);
    }

    componentDidMount () {
        util.request(this.initState.bind(this));
    }

    addTodo (todo) {
        this.state.promisList.push({
            state : 'promis',
            todo  : todo,
            index : ++this.listCount
        });
        this.setState({
            list : this.state.promisList
        });
    }

    sort () {
        this.state.promisList.sort(function(current, next){
            return current.index > next.index ? 1 : -1;
        });

        this.state.resolveList.sort(function(current, next){
            return current.index > next.index ? 1 : -1;
        });
    }

    resolveTodo (item, i) {
        item.state = 'resolve';
        this.state.resolveList.push(item);
        this.state.promisList.splice(i, 1);
        this.sort();
        this.setState({
            promisList : this.state.promisList,
            resolveList : this.state.resolveList
        });
    }

    promisTodo (item, i) {
        item.state = 'promis';
        this.state.promisList.push(item);
        this.state.resolveList.splice(i, 1);
        this.sort();
        this.setState({
            promisList : this.state.promisList,
            resolveList : this.state.resolveList
        });
    }

    removeTodo (item, i) {
        if(item.state == 'promis'){
            this.state.promisList.splice(i, 1);
            this.setState({
                promisList : this.state.promisList
            });
        } else {
            this.state.resolveList.splice(i, 1);
            this.setState({
                resolveList : this.state.resolveList
            });
        }
    }

    render () {
        return (
            <section id={'todo_list_' + this.state.id}>
                <TodoHead {...this.state} addTodo={this.addTodo.bind(this)}/>
                <TodoPromis id={this.state.id} list={this.state.promisList} resolveTodo={this.resolveTodo.bind(this)} removeTodo={this.removeTodo.bind(this)}/>
                <TodoResolve id={this.state.id} list={this.state.resolveList} promisTodo={this.promisTodo.bind(this)} removeTodo={this.removeTodo.bind(this)}/>
                <TodoChart {...this.state}/>
            </section>
        );
    }
}
