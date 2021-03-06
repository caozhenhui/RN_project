import React from 'react';
import { 
	Image, 
	StyleSheet, 
	Text, 
	StatusBar,
	TextInput,
	View,
	ScrollView,
	TabBarIOS,
	Dimensions 
} from 'react-native';

export default class App extends React.Component {
	constructor (prop) {
		super(prop);
		this.state = {
			list:[],
			selectedTap: 'home'
		};
	}
	render() {
		const {width} = Dimensions.get('window');
		const inputWidth = width - 40;
		const inputPosition = width * 0.579 * 0.75;
		const ImgHeight = width*0.49*0.583;
		return (
			<View style={styles.container}>	
				<TabBarIOS>
					<TabBarIOS.Item
						selected={this.state.selectedTap === 'home'}
						title="首页"
						systemIcon="bookmarks"
						onPress={() => {
							this.handleChangeItem('home')
						}}
					>
						<View style={styles.tabbar}>
							<View>
								<StatusBar
									barStyle="light-content"
								/>
								<Image
									style={{width, height: width*0.579}}
									source={
										require('./resource/images/banner.jpg'
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
												<View style={styles.listItem} key={item.id}>
													<Image style={[styles.itemImg, {height: ImgHeight}]} source={{uri: item.uri}}/>
													<Text style={styles.itemTitle}>{item.title}</Text>
												</View>
											)
										})
									}
								</View>
							</ScrollView>
						</View>
					</TabBarIOS.Item>
					<TabBarIOS.Item
						selected={this.state.selectedTap === 'list'}
						systemIcon="downloads"
						title="列表"
						onPress={() => {
							this.handleChangeItem('list')
						}}
					>
						<View>
							<Text style={{color:'#000'}}>123</Text>
						</View>
					</TabBarIOS.Item>
				</TabBarIOS>
			</View>
		);
	}
	componentWillMount () {
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
	handleChangeItem (data) {
		this.setState({
			selectedTap: data
		})
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		position: 'relative'
	},

	input: {
		position: 'absolute',
		height: 40,
		paddingLeft: 8,
		backgroundColor: '#fff',
		borderRadius: 4,
		marginLeft: 20
	},

	categories: {
		width: '100%',
		flex:1
	},

	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10
	},

	listItem: {
		width: '49%'
	},

	itemImg: {
		width: '100%',
		borderRadius: 8
	},

	itemTitle: {
		marginTop: 8,
		marginBottom: 8,
		textAlign: 'center',
		color: '#333',
		fontSize: 14
	},

	tabbar: {
		flex:1
	}
});
