import React from 'react';
import BaseComponent from './BaseComponent.jsx';

class TodoChart extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            bgColor : false
        };
        this._$el = null;
        this._chart = null;
    }

    getChartOptions () {

    }

    get $el () {
        return document.getElementById("chart_main_" + this.props.id);
    }

    set chart (_chart) {
        this._chart = _chart;
    }

    get chart () {
        return this._chart;
    }

    componentDidMount () {
        this.chart = echarts.init(this.$el);
    }

    componentDidUpdate () {

        var xAxis  = [],
            data   = [];
        this.props.promisList.map(function(item){
            xAxis.push(item.todo);
            data.push(100);
            return item;
        }),
        this.props.resolveList.map(function(item){
            xAxis.push(item.todo);
            data.push(-100);
            return item;
        });

        this.chart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter : function(data){
                    var todo = data[0];
                    return todo.name + '<br/>' + (todo.value < 0 ? '已完成' : '未完成');
                }
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        show : false
                    }
                }
            ],
            xAxis : [
                {
                    type : 'category',
                    show : true,
                    axisTick : {
                        show: false
                    },
                    axisLabel : {
                        show : false
                    },
                    data : xAxis
                }
            ],
            series : [
                {
                    name:'事项',
                    type:'bar',
                    barWidth : 10,
                    itemStyle : {
                        normal: {
                            label : {
                                show: false,
                                position: 'inside'
                            },
                            color : function(params){
                                return params.data < 0 ? '#9BCA63' : '#D7504B';
                            }
                        }
                    },
                    data: data
                }
            ]
        }, true);

        this.$el.className = this.$el.className + ' white';
    }

    getStyle () {
        var style = {
            width : this.props.width,
            height : this.props.height,
            margin : '0 auto 100px auto'
        }

        return style;
    }

    render () {
        return (
            <section id={"todo_chart_" + this.props.id}>
                <div id={"chart_main_" + this.props.id} style={this.getStyle()}></div>
            </section>
        );
    }
}

TodoChart.defaultProps = {
    width : '25rem',
    promisList : [],
    resolveList : [],
    height : '40rem'
};

TodoChart.propTypes = {
    options : React.PropTypes.object,
    width   : React.PropTypes.string,
    height  : React.PropTypes.string,
    promisList : React.PropTypes.array,
    resolveList : React.PropTypes.array
};

export default TodoChart;
