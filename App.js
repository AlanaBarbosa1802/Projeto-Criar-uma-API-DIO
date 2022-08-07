import React,{Component} from 'react';
import {SafeAreaView,Text,Stylesheeat, FlatList} from 'react-native';
import Api from './Api';
import Filme from './Pages/index';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmes:[]
        }
    }
    async componentDidMount(){
        const response = await Api.get('/filmes');
        this.setState({
            filmes: response.data
        })
    }
    render()
}
return(
    <SafeAreaView style = {style.container}>
   <FlatList>
    data = {this.state.filmes}
    keyExtractor ={item => item.id}
    renderItem= {({item}) => <filme data ={item}/>}
    
    </FlatList>     
    </SafeAreaView>
)

const styles = Stylesheeat.create({
    container:{
        flex:1
        backgroundcolor: 'black'
    }
})