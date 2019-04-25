import React, { Component } from 'react';
import { View } from 'react-native';
import { Thumbnail, Container, Header, Content, Card, Title, CardItem, Textarea, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
import LineChart from "react-native-responsive-linechart";
export default class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {

        const config = {
            line: {
                visible: true,
                strokeWidth: 2,
                strokeColor: "#341f97"
            },
            area: {
                visible: false
            },
            yAxis: {
                visible: true,
                labelFormatter: v => String(v) + " p.",
                backgroundColor: "#a8d8ea",
            },
            xAxis: {
                visible: true,
            },
            grid: {
                stepSize: 1,
            },
            insetY: 10,
            insetX: 10,
            backgroundColor: "#a8d8ea"
        };
        return (
                <LineChart style={{ flex: 1}} config={config} data={ Object.values(this.props.Selected.grade)} xLabels={Object.keys(this.props.Selected.grade)} />
        );
    }
}

