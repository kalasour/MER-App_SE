import React, { Component } from 'react';
import {  Text,Modal } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, View,Spinner } from 'native-base';
export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.Loading}
            >
                <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Spinner color='red' />

                        </View>
                    </View>
                </Container>
            </Modal>
        );
    }
}
