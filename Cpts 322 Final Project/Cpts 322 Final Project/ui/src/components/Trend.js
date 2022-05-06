import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

// Used for importing 
import React, { Component } from 'react';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

export class PieChart extends React.Component {

    /// Properties
    // General graph variables used in chart.js
    height;
    width;

    // graph specific proper
    graphColor;
    graphData;
    graphLabels;

    // Used for rendering
    chartRef = React.createRef();


    // Default constructor
    constructor() {
        this.height = 400;
        this.width = 400;
        this.name = "default name";
        this.graphLabels = ['default1', 'default2'];
        this.graphData = [1, 2];
        this.graphColor = 'rgba(255, 99, 132, 0.5)';
    }


    // Setters and Getters
    // Height
    GetHeight() {
        return this.height;    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == Number) {
            this.height = newHeight;
        }
    }
    // Width
    GetWidth() {
        return this.width;
    }
    SetHeight(newWidth) {
        if (typeof (newWidth) == Number) {
            this.width = newWidth;
        }
    }
    // Name
    GetName() {
        return this.name;
    }
    SetName(newName) {
        if (typeof (newName) == String) {
            this.name = newName;
        }
    }
    // GraphLabels
    GetLabels() {
        return this.graphLabels;
    }
    SetLabels(newLabels) {
        if (typeof (newLabels) == Array) {
            if (newLabels.every(element => typeof (element) == String)) {
                this.graphLabels = newLabels;
            }
        }
    }
    // GraphData
    GetData() {
        return this.graphData;
    }
    SetData(newData) {
        if (typeof (newData) == Array) {
            if (newData.every(element => typeof (element) == Number)) {
                this.graphData = newData;
            }
        }
    }
    // GraphColor
    GetColor() {
        return this.graphColor;
    }
    SetColor(r, g, b, a) {
        if ((typeof (r) == Number && typeof (g) == Number) && (typeof (b) == Number && typeof (a) == Number)) {
            this.graphColor = "rgba(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")";
        }
    }

    // Related to rendering based on barReference
    componentDidMount() {
        const barReference = this.chartRef.current.getContext("2d");

        new Chart(barReference, {
            type: "bar",
            data: {
                labels: this.graphLabels,
                datasets: [
                    {
                        data: this.graphData,
                        backgroundColor: this.graphColor,
                    }
                ]
            },
        });
    }

    // render function called when object needs to be rendered in
    render() {
        return (<div>
            <canvas id={this.graphName} ref={this.chartRef} />
        </div >
        );
    }
}

export class BarGraph extends Component {

    /// Properties
    // General graph variables used in chart.js
    height;
    width;
    name;

    // graph specific proper
    graphColor;
    graphData;
    graphLabels;

    // Used for rendering
    chartRef = React.createRef();


    // Default constructor
    constructor() {
        this.height = 400;
        this.width = 400;
        this.name = "default name";
        this.graphLabels = ['default1', 'default2'];
        this.graphData = [1, 2];
        this.graphColor = 'rgba(255, 99, 132, 0.5)';
    }


    // Setters and Getters
    // Height
    GetHeight() {
        return this.height;    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == Number) {
            this.height = newHeight;
        }
    }
    // Width
    GetWidth() {
        return this.width;
    }
    SetHeight(newWidth) {
        if (typeof (newWidth) == Number) {
            this.width = newWidth;
        }
    }
    // Name
    GetName() {
        return this.name;
    }
    SetName(newName) {
        if (typeof (newName) == String) {
            this.name = newName;
        }
    }
    // GraphLabels
    GetLabels() {
        return this.graphLabels;
    }
    SetLabels(newLabels) {
        if (typeof (newLabels) == Array) {
            if (newLabels.every(element => typeof (element) == String)) {
                this.graphLabels = newLabels;
            }
        }
    }
    // GraphData
    GetData() {
        return this.graphData;
    }
    SetData(newData) {
        if (typeof (newData) == Array) {
            if (newData.every(element => typeof (element) == Number)) {
                this.graphData = newData;
            }
        }
    }
    // GraphColor
    GetColor() {
        return this.graphColor;
    }
    SetColor(r, g, b, a) {
        if ((typeof (r) == Number && typeof (g) == Number) && (typeof (b) == Number && typeof (a) == Number)) {
            this.graphColor = "rgba(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")";
        }
    }

    // Related to rendering based on barReference
    componentDidMount() {
        const barReference = this.chartRef.current.getContext("2d");

        new Chart(barReference, {
            type: "bar",
            data: {
                labels: this.graphLabels,
                datasets: [
                    {
                        data: this.graphData,
                        backgroundColor: this.graphColor,
                    }
                ]
            },
        });
    }

    // render function called when object needs to be rendered in
    render(){
        return (<div>
            <canvas id={this.graphName} ref={this.chartRef} />
                </div > 
        );
    }

}
