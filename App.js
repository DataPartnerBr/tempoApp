import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import {create} from 'apisauce'

export default function App() {

    const api = create({
        baseURL: 'http://192.168.1.92:3349',
        headers: {Accept: 'application/json'},
    })

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    const curDate = (date + '-' + month + '-' + year);

    const [peoples, setPeoples] = React.useState([]);

    React.useEffect(() => {
        api
            .get('/')
            .then((response) => {
                console.log(response.data);
                setPeoples(response.data);
            });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.report}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={styles.textHeader}>RELATÓRIO</Text>
                    <Text style={styles.sectionTitle}>{curDate}</Text>
                    <View style={styles.lineStyle}/>
                    <TouchableOpacity style={styles.card}>
                        {peoples.map((v, index) => {
                            return <View key={index}>
                                <View style={styles.lineStyleCard}/>
                                <Text style={{fontWeight: 'bold'}}>Nome:</Text>
                                <Text style={styles.cardText}>{v.nome}</Text>
                                <Text style={{fontWeight: 'bold'}}>Data de Nascimento:</Text>
                                <Text style={styles.cardText}>{v.nascimento}</Text>
                                <Text style={{fontWeight: 'bold'}}>Endereço:</Text>
                                <Text style={styles.cardText}>{v.endereco}</Text>
                                <Text style={{fontWeight: 'bold'}}>CEP:</Text>
                                <Text style={styles.cardText}>{v.cep}</Text>
                                <Text style={{fontWeight: 'bold'}}>Cidade:</Text>
                                <Text style={styles.cardText}>{v.cidade}</Text>
                                <Text style={{fontWeight: 'bold'}}>Estado:</Text>
                                <Text style={styles.cardText}>{v.estado}</Text>
                            </View>
                        })}
                        <Image
                            style={styles.footer}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                    </TouchableOpacity>

                </View>

                <StatusBar style="auto"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    report: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        elevation: 9,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        borderRadius: 10
    },
    sectionTitle: {
        textAlign: "right",
        fontSize: 15,
        fontWeight: '600',
        color: '#ccc',
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: '2%',
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardText: {
        padding: 5,
        fontSize: 16
    },
    textHeader: {
        textAlign: 'center',
        padding: 10,
        fontSize: 18
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    footer: {
        marginTop: 20,
        backgroundColor: '#bbe',
        width: '100%',
        height: 25,
    },
    lineStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 1,
    },
    lineStyleCard: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#5BC5C3',
        marginTop: 10,
        marginBottom: 10,
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 0,
        marginVertical: 0,
    },
});
