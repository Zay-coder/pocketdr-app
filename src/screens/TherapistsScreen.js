import React from 'react'
import {
    FlatList,
    View,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import filter from 'lodash.filter'
import {ApplicationProvider, Text, Avatar, Input} from '@ui-kitten/components'
import {mapping, light as lightTheme} from '@eva-design/eva'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class ShowTherapists extends React.Component {
    state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        query: '',
        fullData: []
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
        const {page, seed} = this.state
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
        this.setState({loading: true})

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    fullData: res.results
                })
            })
            .catch(error => {
                this.setState({error, loading: false})
            })
    }

    contains = ({name, email}, query) => {
        const {first, last} = name
        if (
            first.includes(query) ||
            last.includes(query) ||
            email.includes(query)
        ) {
            return true
        }
        return false
    }

    handleSearch = text => {
        const formattedQuery = text.toLowerCase()
        const data = filter(this.state.fullData, user => {
            return this.contains(user, formattedQuery)
        })
        this.setState({data, query: text})
    }

    renderHeader = () => (
        <View
            style={{
                flex:1,
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <MaterialCommunityIcons
                name={"account-search"}
                size={35}
                color={'#fff'}
                style={{padding:10}}

            />

            <Input
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleSearch}
                status='info'
                placeholder='search therapists'
                style={{
                    flex:1,
                    paddingTop: 15,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingLeft: 0,
                    borderRadius: 25,
                    borderColor: '#333',
                    backgroundColor: '#fff'
                }}
                placeholderTextColor='#000'
                textStyle={{color: '#000', textAlign:'center'}}
                clearButtonMode='always'
            />


        </View>
    )

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '90%',
                    backgroundColor: '#fff',
                    marginLeft: '5%'
                }}
            />
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#CED0CE'
                }}>
                <ActivityIndicator animating size='large'/>
            </View>
        )
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor:'#E2F4FF'
                }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => alert('Item pressed!')}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    alignItems: 'center'
                                }}>
                                <Avatar
                                    source={{uri: item.picture.thumbnail}}
                                    size='giant'
                                    style={{marginRight: 16}}
                                />
                                <Text
                                    category='s1'
                                    style={{
                                        color: '#000'
                                    }}>{`${item.name.first} ${item.name.last}`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }
}

const TherapistsScreen = () => (

    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <ShowTherapists/>
    </ApplicationProvider>

)

export default TherapistsScreen;
