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
import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
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

export default class BarGraph extends Component{

    // General graph properties
    graphName;
    height;
    width;

    // Display properties
    graphLabels;
    graphData;
    graphColor;

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

}