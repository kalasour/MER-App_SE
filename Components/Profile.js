import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Form, Item, Label, Input, Thumbnail, Body, View } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Modal } from 'react-native';
import * as firebase from 'firebase/app'
import {

  TouchableHighlight
} from 'react-native';
import "firebase/auth";
export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="person" style={{ width: 30, color: tintColor }} type="MaterialIcons" />);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
      show: false,
      PicLink: '',
      PicList: ["https://lh3.googleusercontent.com/Row3WviPhvCPfld8ISJUz5oyEACXNG61f3g3tDgEGuVUaHGcsztmcM0AJU55Ue4OAxACa6NKrKxJxI7JVngKYe2PAoTgVk1IzIX35xJ1q9WG8B7IUDinvwb7-M8WxgSbHHeEfd3zT3wOYNHznRRg6T0lPaL1ulfPEXWuoLMz0wr7fSVU5RYUP326tD-IJE9ye2kj0ZNVdUqlXIIyKSgSQMrd1pE6PZ4oyuW6p0IxRqE5a4lGXFBNCEgFb6Bd7YXLHh6BXAC1qr6n8wNRYVgAtQJmDuzhxWaV46ySRV48JfbMbcxfp2za3OVbkr7kKDE2s6OmBA80iKgFfMM-_Zu-Bz3aCgo94KVVmF0SMNStT_fpVP4iL9J3RN81-DKmfv_pOS8mkvPpzNYVsTCy_Lpv6lRRHuuDVqo3BR0lbsZuhJhk78SmG8fNH_iPsQo91XppTgweXLuXmQQdJCn3UTYEbCf3h0_uj4FgVybfwM6Qp6BoY63FdoY9wbvfGKbkYiz5R0AOoTbFqbo_lqPeCRZWa3OiqlwwPHXXkisFa0c5gmtQsBMaUN0Zpz1LUQaSDrW3fl6kMgw-XrFzL-wHu3aVem-ctMcymH6DsbRmru25Iyv1UhFWMDe7Yddx5x2R2fLg28bQGWPnB-7l9CIpXrNYzA7VwIRvGkfptK1iAlac_XFwZAtj0d1k5xvI6WiFeIzlxia9cELEXBuZdu8CRhSSBTIf=s379-no",
        "https://lh3.googleusercontent.com/PTylqlwnmUhg6nweOKDbwdJsTpKTtomoq7Pe-1roahwfI5qHxNbMFeV2EsJ7kFQkc9U42VuLR7PcI_Bi7nibibsO0WAU1tj1tjNl9hkCqWOQC3Frj0MCk5yOGiYFKh-qIyt25a5C_pSd45X55lt_lEhxeXEjJESWNoV80hW_Pks3myqmQHoIk-RaybxmQDAWQE2_zaZZZ6CwsqJp7rjxxFOOIvBIuhAY5TVSX9ZnLepSjSbbY5_KxwgT4e9EayCyFso7TqLlZYW2Jd3H1080kOHD9_0ZmRBHDJCnA5zI7x56jQKQAEr3oXJZaKzXDpoz6HRwhi4nthhq1RszCd4Yvdvp-5k5zfrjkbr18vzGOrahW8dBTLNj9NcwZQxlCy_CmGtcqJoFZ2vsRofGg39HSMHUXWIo4Fc0HkGo1DkQxdaQTEX0Vl0lqEh2QQ46IdRqEmeiNKOtuLuoorpZbFRpCB11iQfnyoGGqp8ueR6QoU0Dfp77-NAWB4Wu4Mu37wuDYR0rrkoKWTtHQbZx0NDtjPHUV6E6xFlPlZP4FPhnj7iXBZ0KjQ8gmaBqXQm6XABYDz8f-Y7RochqEGL1rlBHzuBeOv0KGa7XcJIrL99iODWk_TGJY7N-oTZ6N8UeCzFC1evATyVD-IO8vRXNwJwgV9jUi6XzwgzRga12f4TQWVEibLyS_gEZKX0qmKq9ehych59yAOTOTSqmCz466nDhR9iz=s387-no",
        "https://lh3.googleusercontent.com/fYId2FkzB_xq0vkIsrl1FwxV6htx4BGsjsYzRDKGHSbiEmo73CCmCttXUt4FdpzQltEjvcLkrLudwVQVJjCl7SGkIIkMQx8G962ZPDOLaTBHs5AZs7d-38cN0zdyb3-sPlSshpKqEgyn3b_z2kXRznlzNpghaTYd52TewF7jT7FppWKg_vxKvFzXw0dnWAIRIjP1EJwpE-sg4Xv3PCTLzPJCscJrRMLx5ialaU_RTMAW9EFg0NKHk3Q8tQc9cN_1AsOSZj60ii24-oyRojjQ4od6WvHSUk8rSYp6mlxBDXLyRPCa3g7yoRqLW7Skmmzd4QKZtTqEmmCpJOsEdNSXnLHTxdsPONgNT7pelCBGReOmFqvGUmK_JEx6kXIUhXTv5u7KQCfBxZ5WwTsXPktailgcsZds9-sWIW-lYUO6QRzJwsJtBU1UaEUBq36I5MCsmuWlmrSidTt0x850XunESCACXkmvg0zOdCYEt2mIhp7UDR9OY91xPc1xGkKDB7H9tkKMPavbMNaWkkB_McBEH7MNUU1vYqKdYrJiELntIXdJzFhNcJzqhw2H-HUzC_-vj9h1CvcsgAwgNwSAfyAjFCy60Wyt-N_SKBVi1PnAgdwiKJ88KKxesLdDodkMpVeu1iFgzQfRUEuObHPrWULhNmEwYaMVi7XXTuSsI45TocHLYTD8AotHP6hEgWYV_0v6ym7gqI9dyZHQl7gIXfuB9USg=s400-no",
        "https://lh3.googleusercontent.com/szDg6MeHyGBwsY7nrbB7KFtaerLG9tGNMWbnI2b0QlyGw6mLZ8DgU-G5PWfYchi0Mi21cwuWzCInLYIgJ2k-eBIsnZy6b8C4cPSNduhzwDBBCeUCa3ob06wQjc2gjio8bpHI3Vr6ZATkCGYaXKAPSkGNhIkPnNRQkfOJ7wsDN_19UTI0AgqIyPpBG-JikzPqL3EbFE19vLYkm3lmYVgdoa0VXLhm2LqFqMVDLAcP4eVkgDo85DlXAQT698GA8wxMmSWLd_36SiV3eWAb-m2YWvXOyFrI6aWUuTvhAyRRg9mYampDVO2CfoYMGjwUIf0F2ytTTIiQxHr_Kb1TpFlu6brfGYpgDNncUPELIuTpk2cX-ziXokIeiDEw2QW3NRX00rio9QCChJrrkKomay7Na9yjUzMgkLM2LXHxHT1Ty7VtrwAN75UEI_aj7qc5RrVRDQa8FoUJaH6nVA5OSoTGUrwsOMP5YIyVqWRXMta14YkNoDXkxoOuwuAxjP_6-s6Qnqr0SpLQQnK-mdGIKVSn7D6agj3nMgkheBeELuT8400Ag5m3ozWN-x6CfnnAGEtURCH7CbsM65jPk4fL6pwbnzgmmJDDRd5TwENH3seZfgGtfZZLjYe5r7_g8YFlMev50Lhlj4JY2V0yfOLnzGCEb1jyJurHFI-llERgtSICqEIv6vpexBktu3xSZ0apG2hx8VKWyiHR6cBlUYBi9N8d_7Qp=s379-no",
        "https://lh3.googleusercontent.com/6d_VDdP6KBImlZoIUyjBSbnl9P_ypkY84O7IPgqnKIweA37HJUDZnSyU4G8AGK9VppkUQi09fzXlplge-SKvAOmE1oCRR71QKK9tDTz0XTSqDa1taFCxLb2DzxQIr9-kMffXTPxLXlPMNgqZUPaABTG7zVz4Lv689Zqc-wgZwfGZ-U9Kq3r8D5GuwbERMq8CtFtp7sfGV6agv_ZYb0irM0kUHjPORdb0UHZYMPZriqIJinmoocn2IgILY8_e58Zz7Eo789JjNxVKGIurVFClHABUNzxsuN-DbNVI2msxhGuOtuWpTQLoDA8_JRog5HgBfhZbnjr1asyv4S_RSiQgMTISFjviSp4pl_BIxCAezVPL0Ee0zv0qPfuvqDwWSREoxSLkr5LjS-IvP4yaGdfuK6miOHbVrnWUghxmoFx3LdTEThSUXJUi3WZw0mXXvgO0c0ia0YPE3xxSZhMrmLVTvoHtFDxKVbikdheKrTn-59dE-2XaoGTG0b8ccvM4T-r_l0oQY4MinRZ3laNfEXozziF4YQ2eF2IFCE_vqTOr-v5YdP9UhRIM5vUu-ZKHt2wNG92lhtoHYNO2K4LFFiVKUndT9d1SXnwlbSxQFTodCOUrrfZd4c6WypPOxHrtCFqvln_veXJn6ORqedoxja5DtdZ3z4UBtD2Bn0QXj_muT6NwGosLwK_Kj98SSuO_nhjnoVjiO2HEHTsoPBHRGgVKtnbA=s375-no",
        "https://lh3.googleusercontent.com/ePlXtFeH1MBX0rnhwTVoxhuJ6MoaJqdx8Q8a6ynLu1A4JKr_V521rPhkpcwfg_EKdjYkRstcleYEYjgwQcRvwKZc2dXv2IHNB5gH6t4dxXlcIM_Sa9C7g1kJoW6cPdr9Aj0MukV12bLeHaAVtPOgFWx0z7ip8uQEYhVh_D-e1I4mjT8p13pZLAp04b6zrLfCB15cy0-hzbMIvea-b0e1jOAkl2DhfTWH8Bh_D2UA6IuJs39RY2FxYdHMgU_OwyVxGVgTyC6qDqHGRWmvDDYwN7oylAYB4j_U4MGY19CVA9bwFEREXQXz34HGOrmjuAdOXFfit9Dz1MVO-94ZaWrZxCgmI5C0WC0Jk9o5EBc0-sgGHViXLzyQYbqzAGiOn5Axjzmc6HStr_1BQ9NK1183nJd6cWrd36McJhoBZ3FbXrzW93tC7A9Fva2FhU6vafLZt5HPqD5Vs-V_6PcoSf1ie1EvAUx4TQB7yKCSagS5RG-CfJLXIgKrswiMOlBhpEtHjgLFvtH498dxkHNIl5f7RwM4Lwd9kphrUuImcn1uqbBxF1mwxU5G0b3adwTpbaUq9BXORMp1iS_9190yD2GjROE48uoPlbraYWBuEnt2iJ2pMdpmNE-zS1U_mZ69DDw1mGOBBGk-hdzmbhPhe-VcyPhLMsKHiXb3Vc7xF_goBxhzPTULtDAMklaxmKV1gr6NhRCbnf_Lcs4Y7bdPOIJ28uPn=s400-no",
        "https://lh3.googleusercontent.com/S4Z_lOW1q2Ohzeg-O3sCDx-HYXCxSMWCldXqYXjoBGjkY5DVO_dfK3uD_Q31ftASGPDTWOwx9jsBs1sVzRlajFiYfIL2NSV0RiBhCs7vSpMGCM8FoBqlgkS5vWR9GyU2i8y5iBH616tUp-RLGvG5kEfrbZsPDAXkmNIitcq7n6u_nrWOWW6kRkW9lVBJtHViAU8xEKitTLROcNAL_c1uYlR6iQ4430oReK2eH38a1wmWvNi35Ba0vRLVUjjcQMw-UyyY3latH9J4RdYuWQc7P_MQoOIwklSVYbg4Hvv6JYiOhjQWJ5Ejn15hGIxBlaPi5K9rLbhFbyq6ZN-Ev1LB0PTec_Ob817WyCdt8uaJs9MXGHyjAgkjIDfL9_rarZQUIjLHa3RuKY7zardNljUyb-TosVdmWQToWpfJftNZ72hTg5u0nAcN-Br9cslc1S2-908PQcLvzGSs1NMEfCEqhAw6EOSrV40uBglGepoKZqFqKJJ5WX4A1MFoSD55a6i_USJnMQ2G4pBHbJ0zaP6yZujHMkwdSAu00kgdow7Qe55HGCroWjuxxJLZSdDw_kXwo9FugOrHVy5icitjxtE4y4yHQkAnf9iMhmlIuQkq4sem_XGJte1TshX0dSysWOObf1fPTdnYMgyOIWaP9rGmutDae5fLFofyRXMscZjLmnoiEqtG85tneDlZZrcqPPXnsbFpqlxCZ8F_O4DqStmoDo7_=s401-no",
        "https://lh3.googleusercontent.com/zCghegCOm7SeY2N_Q0cTuWbJKujoqRoNqhT5N2h3BXhCCOQx41z93nhXP45b-ByvBYi6UkFn65wv6WhXwEqm3bu_W7_7eSTJGtAg0c_D5SJXb7x4x4qsFqlhJ0uNWrMBi5ZaR3JxASzN5v9lgKCsWn1T2f3Z3AVRnA4KdzecCkBx6tsKLGoOsmEaZR2PHcsJTeDUFF8ZQoJC1_pSEhM5OWFRKRz_ZxO5WBiZTomDIulTYveQ9lSObXfqeH5G6bTWtaHtOw3o6fysL9RG-OQvNbsGa3XAzIkqFR04wcjIlLbUgXHosejMePLxxmyCVwDZsCOXCoa6Avitw4lJrePGHKKOy5-M9J_r3X9A8pIJm7PxddkPYkBFJIenijoWvUbWS1mYPxypjER4WIfad4fwxK_UALyIdsVA4Rd3WHB0PCBuzONEEelGl3aVeEmSldFNLdSp7TBZCd9nfQcJo5Y1rRMGE6nfGvDzjYQOqDmA096OK46CZXlT6Y2VvnWO2hCzQij7pcaEPuNto6lMI7-x3yOd3GZn1AKbtEsm4858zdUTy1wh0VIznXuhOvUQ7CXApqDpqjvMXvF3KZ63IlR2FYFRxD3lWXKXhgVmIwotEvzVWYRdcV6bx4zNRPEDT_uvYzbx_aCpImeqlIYbgGQ5LeU-Up5EYt3CIIZ1Ljxtx4Y7aYFVU-doTnfxFSS463E0XXt6LbJfmlIyq4DuXHuH855a=s393-no"
      ]
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // alert(email)
        this.setState({ Firstname: displayName, Email: email, PicLink: photoURL })

      } else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        });
        this.props.navigation.dispatch(resetAction);
      }
    })
  }
  render() {

    return (


      <Container>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show} >
          <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Content padder style={{ marginTop: 22 }}>
              <Row>
                {this.state.PicList.map((uri, index) => (
                  <TouchableHighlight
                    key={index}
                    onPress={() => {
                      this.setState({ show: false, PicLink: uri })
                    }}><Thumbnail large source={{ uri: uri }} /></TouchableHighlight>
                ))}
              </Row>
              <Button style={{margin:20}} danger full onPress={() => this.setState({ show: false })}><Text>Cancel</Text></Button>
            </Content>
          </Container>
        </Modal>


        <Content style={{ backgroundColor: '#87cefa' }}>

          <Form>
            <CardItem style={{ backgroundColor: '#87cefa' }} >
              <TouchableHighlight onPress={() => this.setState({ show: true })} >
                <Thumbnail large source={{ uri: ((this.state.PicLink == null || this.state.PicLink == '') ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_of_none.svg/819px-Image_of_none.svg.png' : this.state.PicLink) }} />
              </TouchableHighlight>
            </CardItem>

            <Card style={{ padding: 20, marginLeft: 10, marginRight: 10 }}>
              <Item floatingLabel style={{ marginBottom: 5 }}>
                <Label>Firstname</Label>
                <Input value={this.state.Firstname} onChangeText={(Text) => { this.setState({ Firstname: Text }) }} />
              </Item>

              <Item floatingLabel style={{ marginBottom: 5 }}>
                <Label>Lastname</Label>
                <Input value={this.state.Lastname} onChangeText={(Text) => { this.setState({ Lastname: Text }) }} />
              </Item>

              <Item floatingLabel style={{ marginBottom: 5 }}>
                <Label>Email</Label>
                <Input disabled value={this.state.Email} onChangeText={(Text) => { this.setState({ Email: Text }) }} />
              </Item>
            </Card>
            {/* <Item floatingLabel>
              <Label>Password</Label>
              <Input value={this.state.Password} secureTextEntry={true} onChangeText={(Text) => { this.setState({ Password: Text }) }} />
            </Item> */}
          </Form>


          <Row style={{ margin: 20 }}>
            <Col >
              <Button style={{ alignSelf: "center" }} bordered primary onPress={() => {
                var user = firebase.auth().currentUser
                user.updateProfile({ displayName: this.state.Firstname, photoURL: this.state.PicLink })
                user.updateEmail(this.state.Email)
                alert('Updated')
                // firebase.auth().currentUser.updatePassword(this.state.Password)
              }}><Text> Save </Text></Button>
            </Col>
            <Col >
              <Button style={{ alignSelf: "center" }} bordered danger onPress={() => {
                firebase.auth().signOut()
              }}><Text>Logout</Text></Button>
            </Col>
          </Row>

        </Content>
      </Container>
    );
  }
}