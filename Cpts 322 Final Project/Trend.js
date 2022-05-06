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
import { Line, Pie, Bar } from 'react-chartjs-2';
import ReactDOM from "react-dom";

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

// Bar graph creator class.
export default class BarGraph extends Component {

    // General graph properties
    graphName;
    height;
    width;

    // Display properties
    graphLabels;
    graphData;
    graphColor;

    // Used for rendering
    chartRef = React.creatRef();

    // Default constructor
    constructor() {
        this.graphName = "default";
        this.height = 400;
        this.width = 600;
        this.graphLabels = ['label1', 'label2'];
        this.graphData = [1, 2, 3, 4];
        this.graphColor = 'rgb(255, 99, 132)';
    }

    //Setters and Getters
    GetName() {
        return this.graphName;
    }
    SetName(newName) {
        if (typeof (newName) == String) {
            this.graphName = newName;
        }
    }
    GetHeight() {
        return this.height;
    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == Number) {
            this.height = newHeight;
        }
    }
    GetWidth() {
        return this.width;
    }
    SetWidth(newWidth) {
        if (typeof (newWidth) == Number) {
            this.width = newWidth;
        }
    }
    GetLabels() {
        return this.graphLabels;
    }
    SetLabels(newLabels) {
        if (newLabels == typeof (Array)) {
            if (newLabels.every(element => typeof (element) == String)) {
                this.graphLabels = newLabels;
            }
        }
    }
    GetData() {
        return this.graphData;
    }
    SetLabels(newData) {
        if (newData == typeof (Array)) {
            if (newData.every(element => typeof (element) == String)) {
                this.graphData = newData;
            }
        }
    }
    GetColor() {
        return this.graphColor;
    }
    SetColor(r, g, b, a) {
        if ((typeof (r) == Number && typeof (g) == Number) && (typeof (b) == Number && typeof (a) == Number)) {
            this.graphColor = "rbga(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")";
        }
    }

    // Makes the graph after it has mounted.
    componentDidMount() {

        const ctx = this.chartRef.current.getContext("2d");

        new Chart(ctx, {
            type: "bar",
            height: this.height,
            width: this.width,
            data: {
                labels: this.graphLabels,
                datasets: [{
                    data: this.graphData,
                    backgroundColor = this.graphColor,
                }]
            },
        });
    }

    // Renders the bar graph
    render() {
        return (
            <div>
                <canvas
                    id="bargraph"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}

// Pie chart creator class.
export default class PieChart extends Component {

    // General graph properties
    graphName;
    height;
    width;

    // Display properties
    graphLabels;
    graphData;
    graphColor;

    // Used for rendering
    chartRef = React.creatRef();

    // Default constructor
    constructor() {
        this.graphName = "default";
        this.height = 400;
        this.width = 600;
        this.graphLabels = ['label1', 'label2'];
        this.graphData = [1, 2, 3, 4];
        this.graphColor = 'rgb(255, 99, 132)';
    }

    //Setters and Getters
    GetName() {
        return this.graphName;
    }
    SetName(newName) {
        if (typeof (newName) == String) {
            this.graphName = newName;
        }
    }
    GetHeight() {
        return this.height;
    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == Number) {
            this.height = newHeight;
        }
    }
    GetWidth() {
        return this.width;
    }
    SetWidth(newWidth) {
        if (typeof (newWidth) == Number) {
            this.width = newWidth;
        }
    }
    GetLabels() {
        return this.graphLabels;
    }
    SetLabels(newLabels) {
        if (newLabels == typeof (Array)) {
            if (newLabels.every(element => typeof (element) == String)) {
                this.graphLabels = newLabels;
            }
        }
    }
    GetData() {
        return this.graphData;
    }
    SetLabels(newData) {
        if (newData == typeof (Array)) {
            if (newData.every(element => typeof (element) == String)) {
                this.graphData = newData;
            }
        }
    }
    GetColor() {
        return this.graphColor;
    }
    SetColor(r, g, b, a) {
        if ((typeof (r) == Number && typeof (g) == Number) && (typeof (b) == Number && typeof (a) == Number)) {
            this.graphColor = "rbga(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")";
        }
    }

    // Makes the graph after it has mounted.
    componentDidMount() {

        const ctx = this.chartRef.current.getContext("2d");

        new Chart(ctx, {
            type: "pie",
            height: this.height,
            width: this.width,
            data: {
                labels: this.graphLabels,
                datasets: [{
                    data: this.graphData,
                }]
            },
        });
    }

    // Renders the bar graph
    render() {
        return (
            <div>
                <canvas
                    id="piechart"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}

// Line graph creator class.
export default class LineGraph extends Component {

    // General graph properties
    graphName;
    height;
    width;

    // Display properties
    graphLabels;
    graphData;
    graphColor;

    // Used for rendering
    chartRef = React.creatRef();

    // Default constructor
    constructor() {
        this.graphName = "default";
        this.height = 400;
        this.width = 600;
        this.graphLabels = ['label1', 'label2'];
        this.graphData = [1, 2, 3, 4];
        this.graphColor = 'rgb(255, 99, 132)';
    }

    //Setters and Getters
    GetName() {
        return this.graphName;
    }
    SetName(newName) {
        if (typeof (newName) == String) {
            this.graphName = newName;
        }
    }
    GetHeight() {
        return this.height;
    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == Number) {
            this.height = newHeight;
        }
    }
    GetWidth() {
        return this.width;
    }
    SetWidth(newWidth) {
        if (typeof (newWidth) == Number) {
            this.width = newWidth;
        }
    }
    GetLabels() {
        return this.graphLabels;
    }
    SetLabels(newLabels) {
        if (newLabels == typeof (Array)) {
            if (newLabels.every(element => typeof (element) == String)) {
                this.graphLabels = newLabels;
            }
        }
    }
    GetData() {
        return this.graphData;
    }
    SetLabels(newData) {
        if (newData == typeof (Array)) {
            if (newData.every(element => typeof (element) == String)) {
                this.graphData = newData;
            }
        }
    }
    GetColor() {
        return this.graphColor;
    }
    SetColor(r, g, b, a) {
        if ((typeof (r) == Number && typeof (g) == Number) && (typeof (b) == Number && typeof (a) == Number)) {
            this.graphColor = "rbga(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")";
        }
    }

    // Makes the graph after it has mounted.
    componentDidMount() {

        const ctx = this.chartRef.current.getContext("2d");

        new Chart(ctx, {
            type: "line",
            height: this.height,
            width: this.width,
            data: {
                labels: this.graphLabels,
                datasets: [{
                    data: this.graphData,
                    backgroundColor = this.graphColor,
                }]
            },
        });
    }

    // Renders the bar graph
    render() {
        return (
            <div>
                <canvas
                    id="linelgraph"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}
