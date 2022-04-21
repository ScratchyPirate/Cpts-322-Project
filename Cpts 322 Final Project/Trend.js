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
class Trend extends React.Component{

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
    pieChartLabels = [];
    pieChartData = [];
    pieChartName = '';

    // Constructor for trend. Initializes elements of each chart
    constructor(newlinelabels, newlinedata,newlinename, newpielabels, newpiedata, newpiename) {

        // Set up graph data
        // Line
        this.lineGraphName = new String();
        this.lineGraphLabels = new Array();
        this.lineData = {
            labels: lineGraphLabels,
            datasets: [{
                label: 'Default Dataset',
                data: [0],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };

        // Pie
        this.pieChartName = new String();
        this.pieChartLabels = new Array();
        this.pieChartData = {
            datasets: [{
                data: [10, 10, 10]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };

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
        this.lineData = {
            labels: lineGraphLabels,
            datasets: [{
                label: 'Default Dataset',
                data: [0],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };

        // Pie
        this.pieChartName = new String();
        this.pieChartLabels = new Array();
        this.pieChartData = {
            datasets: [{
                data: [10, 10, 10]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };

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
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        if (typeof(newWidth) == "number") {
            this.width = newWidth;
        }
    }

    // Height
    getHeight() {
        return this.width;
    }
    setHeight(newHeight) {
        if (typeof (newHeight) == "number") {
            this.height = newHeight;
        }
    }

    // Ctx (Context)
    getCtx() {
        return this.ctx;
    }
    setCtx(newCtx) {
        if (typeof (newCtx) == "string") {
            this.ctx = newCtx;
        }
    }

    // Type
    getCurrentType() {
        return config.type;
    }
    setCurrentType(newType) {
        if (typeof (newType) == "string") {
            this.config.type = newType;
        }
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

        else if (graphType == 'barchart') {
            return (
                <div>
                    <canvas id={this.ctx} width={this.width} height={this.height}></canvas>
                    <Bar







                    />
                </div>);
        }
        
    }
}