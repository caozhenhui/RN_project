import React, {Component} from 'react';
import styles from '../styles/List'
import { 
    View,
    Text,
    ScrollView,
    FlatList
} from 'react-native';

class List extends Component{
    static navigationOptions = {
		title:'美食详情',
		headerStyle:{
            backgroundColor:'#333',
            height: 44
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
    }
    
    constructor(prop) {
        super(prop);
        this.state = {
			list:[]
		};
    }

    render () {
        return (
            <View style={styles.container}>	
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item) => {
                        return item.id
                    }}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.item}>
                                <View style={styles.img}></View>
                                <View style={styles.textBox}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.desc}>{item.desc}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }

    componentWillMount () {
        if (this.props.navigation) {
            let id = this.props.navigation.state.params.id;
        }
		fetch('http:www.foud.com/list').then( res => {
			return res.json();
		}).then( data => {
			this.handleGetListSucc(data)
		})
    }

    handleGetListSucc (data) {
        if (this.props.navigation) {
            this.setState({
                list:data.list_xihongshi
            })
        } else {
            this.setState({
                list:data.list_qiezi
            })
        }
    }
}

export default List;