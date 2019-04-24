import React, { Component } from 'react';
import { View } from 'react-native';
import { Thumbnail, Container, Header, Content, Card, Title, CardItem, Textarea, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
import LineChart from "react-native-responsive-linechart";
export default class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            labels: [],
        };
    }
    componentDidMount() {
        this.setState({ data: Object.values(this.props.Selected.grade), labels: Object.keys(this.props.Selected.grade) })
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
                labelFormatter: v => String(v) + " peoples"
            },
            xAxis: {
                visible: true
            },
            grid: {
                stepSize: 1
            },
            insetY: 10,
            insetX: 10
        };
        return (
                <LineChart style={{ flex: 1 }} config={config} data={this.state.data} xLabels={this.state.labels} />
        );
    }
}
