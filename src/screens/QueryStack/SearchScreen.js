import React, { memo, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Background, Header, Button, TextInput } from '../../components';
import { apis } from '../../core/apis';
import { worknoValidator } from '../../core/utils';

const SearchScreen = ({ navigation: { navigate }, route }) => {
    const [workno, setWorkno] = useState({ value: '', error: '' });

    const _onSubmitPreesed = () => {
        const worknoError = worknoValidator(workno.value);
        if (worknoError) {
            setWorkno({ ...workno, error: worknoError });
            return;
        }
        else {
            sendQuery();
            return;
        };
    }

    const sendQuery = () => {
        return fetch(`${apis.apiPurchaseOrderItem}?workno=${workno.value}`)
            .then((response) => response.json())
            .then((responsejson) => {
                if (!(responsejson.length < 1 || responsejson == undefined)) {
                    navigate("ResultScreen", { rawData: responsejson });
                } else {
                    Alert.alert(
                        '提示',
                        '查無此單號'
                    )
                }
            });
    }

    return (
        <Background>
            <Header>查詢單號</Header>
            <TextInput
                label="派工單號"
                returnKeyType="done"
                keyboardType="number-pad"
                value={workno.value}
                onChangeText={text => setWorkno({ value: text, error: '' })}
                error={!!workno.error}
                errorText={workno.error}
            />
            <Button mode="contained" onPress={_onSubmitPreesed}>
                查詢
            </Button>
        </Background>
    )
}

export default memo(SearchScreen);