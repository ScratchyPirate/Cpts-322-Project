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







                    />
                </div>
            );
        }

        // If the string inputted was "piechart", render this trend's piechart
        else if (graphType == 'piechart') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Pie







                    />
                </div>);
        }

        // If the string inputted was "barchart", render this trend's barchart
        else if (graphType == 'barchart') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Bar







                    />
                </div>);
        }

        // Catch case which just displays an error message.
        else {
            return (<div>Error</div>);
        }
    }
}