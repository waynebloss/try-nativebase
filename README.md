# Expo Native-Base App

## Native-Base Theme

After running `node node_modules/native-base/ejectTheme.js` a directory called
`native-base-theme` was created in the project root. It was then moved to
`src/theme`.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ NativeBase theme has been copied at C:\code\lab\expo\try-nativebase\native-base-theme                                │
│ Here's how to theme your app                                                                                         │
│                                                                                                                      │
│ import getTheme from './native-base-theme/components';                                                               │
│ export default class ThemeExample extends Component {                                                                │
│ render() {                                                                                                           │
│   return (                                                                                                           │
│     <StyleProvider  style={getTheme()}>                                                                              │
│       <Container>                                                                                                    │
│         <Content>                                                                                                    │
│           ...                                                                                                        │
│         </Content>                                                                                                   │
│       </Container>                                                                                                   │
│     </StyleProvider>                                                                                                 │
│   );                                                                                                                 │
│ }                                                                                                                    │
│                                                                                                                      │
│ Head over to the docs (http://docs.nativebase.io/Customize.html#Customize) for detailed information on customization │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```