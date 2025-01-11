import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BaseUrl from '../../constant/BaseUrl';

const Faq = ({id}) => {
  const [showAnswer, setShowAnswer] = useState([]);
  const [faq, setFaq] = useState();


  useEffect(() => {
    console.log('====================================');
    console.log('id', id);
    console.log('====================================');
    getData();
  }, [id]);


  useEffect(() => {

    var a = []

    faq?.map(()=>{
      
      a.push(false)
      
      
      
  })

  setShowAnswer(a)

  }, [faq])
  


  const getData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      category_id: id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(BaseUrl + '/faq/get_category_faq', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status == 200) {
          setFaq(result.data);
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FAQ</Text>

      {faq?.map((f, index) => (
        <View style={styles.accordation} key={index}>
          <View>
            <Text style={styles.question}>{f.question}</Text>
            {showAnswer[index] && <Text style={styles.answer}>{f.answer}</Text>}
          </View>

          <Icon
            size={20}
            onPress={() => {
              var a = showAnswer         
              a[index] = !a[index]
              setShowAnswer(a);
              console.log(showAnswer[index])
            }}
            color={'black'}
            style={{marginLeft: 2}}
            name={showAnswer[index] ? 'caret-up' : 'caret-down'}
          />
        </View>
      ))}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  header: {
    width: '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  accordation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginVertical:5
  },
  question: {
    marginRight: 8,
    color: 'black',
    fontSize: 15,
  },
  answer: {
    marginTop: 10,
    marginLeft: 5,
  },
});
