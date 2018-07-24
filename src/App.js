import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppLoading,
  // Asset,
  Font,
  // Icon,
} from 'expo';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this.loadResourcesAsync}
    //       onError={this.handleLoadingError}
    //       onFinish={this.handleFinishLoading}
    //     />
    //   );
    // } else {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    // }
  }

  loadResourcesAsync = async () => {
    return Promise.resolve();
    // return Promise.all([
    //   // Asset.loadAsync([
    //   //   requ ire('./src/assets/images/abc.png'),
    //   //   requ ire('./src/assets/images/xyz.png'),
    //   // ]),
    //   // Font.loadAsync({
    //   //   'Roboto': req uire('native-base/Fonts/Roboto.ttf'),
    //   //   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //   // }),
    // ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
