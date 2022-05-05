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

// Used for importing 
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import ReactDOM from "react-dom";

// Dummy data used for testing
const testpiedata = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
const testlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const testdata = {
    testlabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: testlabels.map(() => ['3', '5', '7', '9', '8', '11', '12']),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: testlabels.map(() => ['3', '5', '7', '9', '8', '11', '12']),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
// Super class for different types of trends.
export class Trend extends React.Component{

    /// Properties
    // General graph variables used in chart.js
    config = {
        type: 'type',
        data: data,
    }
    ctx;
    height;
    width;

    // Line graph
    lineGraphLabels = ['DefaultLabel'];
    lineData = [];
    lineGraphName = '';

    // Pie chart
    pieChartLabels = ['DefaultLabel'];
    pieChartData = [];
    pieChartName = '';

    // Bar graph
    barGraphLabels = ['DefaultLabel'];
    barGraphData = [];
    barGraphName = '';

    // Constructor for trend. Initializes elements of each chart
    constructor(newlinelabels, newlinedata,newlinename, newpielabels, newpiedata, newpiename, newbarlabels, newbardata, newbarname) {

        // Set up graph data
        // Line
        this.lineGraphName = new String();
        this.lineGraphLabels = new Array();
        this.lineData = {};

        // Pie
        this.pieChartName = new String();
        this.pieChartLabels = new Array();
        this.pieChartData = {};

        // Bar
        this.barGraphName = new String();
        this.barGraphLabels = new Array();
        this.barGraphData = {};

        // Set data of graph to imported data
        this.lineGraphLabels = newlinelabels;
        this.lineData = newlinedata;
        this.lineGraphName = newlinename;
        this.pieChartLabels = newpielabels;
        this.pieChartData = newpiedata;
        this.pieChartName = newpiename;

        // Set locals to default values
        width = new Number();
        height = new Number();
        ctx = new String();
        ctx = 'defaultChartName';
        config.type = new String();
        config.type = 'line';

    }

    // Default constructor
    constructor() {
        // Set up graph data
        // Line
        this.lineGraphName = new String();
        this.lineGraphLabels = new Array();
        this.lineData = {};

        // Pie
        this.pieChartName = new String();
        this.pieChartLabels = new Array();
        this.pieChartData = {};

        // Set data of graph to imported data
        this.lineGraphLabels = newlinelabels;
        this.lineData = newlinedata;
        this.lineGraphName = newlinename;
        this.pieChartLabels = newpielabels;
        this.pieChartData = newpiedata;
        this.pieChartName = newpiename;

    }

    // Setters and Getters
    // Width
    GetWidth() {
        return this.width;
    }
    SetWidth(newWidth) {
        if (typeof(newWidth) == "number") {
            this.width = newWidth;
        }
    }

    // Height
    GetHeight() {
        return this.width;
    }
    SetHeight(newHeight) {
        if (typeof (newHeight) == "number") {
            this.height = newHeight;
        }
    }

    // Ctx (Context)
    GetCtx() {
        return this.ctx;
    }
    SetCtx(newCtx) {
        if (typeof (newCtx) == "string") {
            this.ctx = newCtx;
        }
    }

    // Type
    GetCurrentType() {
        return config.type;
    }
    SetCurrentType(newType) {
        if (typeof (newType) == "string") {
            this.config.type = newType;
        }
    }

    // hello
    // Create functions
    CreatePieChart(newlabels, newdata, newname) {
        this.pieChartData = newdata;
        this.pieChartLabels = newlabels;
        this.pieChartName = newname;
    }
    CreateLineGraph(newlabels, newdata, newname) {
        this.lineData = newdata;
        this.lineGraphLabels = newlabels;
        this.lineGraphName = newname;
    }
    CreateBarGraph(newlabels, newdata, newname) {
        this.barGraphData = newdata;
        this.barGraphLabels = newlabels;
        this.barGraphName = newname;
    }

    // Update functions
    UpdatePieChart(newpielabels, newpiedata) {
        this.pieChartLabels = newpielabels;
        this.pieChartData = newpiedata;
    }
    UpdateLineGraph(newgraphlabels, newgraphdata) {
        this.lineGraphLabels = newgraphlabels;
        this.lineData = newgraphdata;
    }
    UpdateBarGraph(newbarlabels, newbardata) {
        this.barGraphLabels = newbarlabels;
        this.barGraphData = newbardata;
    }

    // Render
    // graphType = requested type of graph
    // newHeight = height in pixels of the graph to be rendered
    // newWidth = width in pixels of the graph to be rendered
    render(graphType) {

        // If a string wasn't inputted, return here and don't render
        if (typeof (graphType) != "string") {
            return <div></div>;
        }

        // If the string inputted was "linegraph", render this trend's linegraph
        if (graphType == 'linegraph') {
            this.config.type = 'line';
            this.ctx = 'Line Graph';
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Line
                        data={this.lineData}
                        label={this.lineGraphLabels}
                        Title={this.lineGraphName}
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Trend Line Graph"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />
                </div>
            );
        }

        // If the string inputted was "piechart", render this trend's piechart
        else if (graphType == 'piechart') {
            this.config.type = 'pie';
            this.ctx = 'Pie Chart';
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Pie
                        data={this.lineData}
                        label={this.lineGraphLabels}
                        Title={this.lineGraphName}
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Trend Pie Chart"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />
                </div>);
        }

        // If the string inputted was "barchart", render this trend's bargraph
        else if (graphType == 'bargraph') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Bar
                        data={this.barGraphData}
                        label={this.barGraphLabels}
                        Title={this.barGraphName}
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Trend Bar Graph"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />
                </div>);
        }

        // test render line graph
        else if (graphType == 'dummyline') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Line data={testdata} />
                </div>);
        }

        // test render piechart
        else if (graphType == 'dummypie') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Pie data={testpiedata} />
                </div>);
        }

        // test render bargraph
        else if (graphType == 'dummybar') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Bar data={testdata} />
                </div>);
        }


        // Catch case which just displays an error message.
        else {
            return (<div>Error</div>);
        }
    }
}