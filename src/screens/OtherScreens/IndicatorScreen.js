import React, { memo } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { View } from 'react-native';

import { Background } from '../../components';

const IndicatorScreen = () => (
    <Background>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' animating={true} />
            <Text style={{ marginTop: 30, color: 'white', fontSize: 30, fontWeight: 'bold' }}>Hello</Text>
        </View>
    </Background>
)

export default memo(IndicatorScreen);