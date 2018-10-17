import React, {Component} from 'react';
import styles from '../styles/App'
import { 
	Image, 
	StyleSheet, 
	Text, 
	StatusBar,
	TextInput,
	View,
	ScrollView,
    Dimensions,
    TouchableWithoutFeedback 
} from 'react-native';

class Home extends Component{
    constructor(prop) {
		super(prop);
		this.state = {
			list:[]
		};
    }

    render () {
		const {width} = Dimensions.get('window');
		const inputWidth = width - 40;
		const inputPosition = width * 0.579 * 0.75;
		const ImgHeight = width*0.49*0.583;

        return (
            <View style={styles.container}>	
                <View style={styles.tabbar}>
                    <View>
                        <StatusBar
                            barStyle="light-content"
                        />
                        <Image
                            style={{width, height: width*0.579}}
                            source={
                                require('../resource/images/banner.jpg'
                            )}
                        />
                        <TextInput
                            style={[styles.input, {top: inputPosition, width: inputWidth}]}
                            underlineColorAndroid = "transparent"
                            textAlignVertical = "top" 
                            placeholder="请输入收索内容"
                        />
                    </View>
                    <ScrollView  automaticallyAdjustContentInsets={false}  style={styles.categories}>
                        <View style={styles.list}>
                            {
                                this.state.list.map( item => {
                                    return (
                                        <TouchableWithoutFeedback key={item.id} onPress={() => this.handleToList(item.id)}> 
                                            <View style={styles.listItem}>
                                                <Image style={[styles.itemImg, {height: ImgHeight}]} source={{uri: item.uri}}/>
                                                <Text style={styles.itemTitle}>{item.title}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
	}
	
	componentDidMount () {
		fetch('http:www.foud.com/img').then( res => {
			return res.json();
		}).then( data => {
			this.handleGetListSucc(data)
		})
	}
	handleGetListSucc (data) {
		this.setState({
			list:data.data.list
		})
    }
    handleToList (id) {
        this.props.nav.navigate('List', {id:id})
    }
}

export default Home;