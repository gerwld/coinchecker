# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to the project: http://gerwld.github.io/coinchecker <br>
Heroku: http://coincheckerproj.herokuapp.com/



## Project structure

```
.
├── App.js
├── api
│   ├── AuthService.js
│   ├── BoardService.js
│   └── WalletService.js
├── components
│   ├── UI
│   │   ├── Aside
│   │   │   ├── Aside.jsx
│   │   │   └── Aside.module.css
│   │   ├── EmbeddedLoader
│   │   │   ├── EmbeddedLoader.jsx
│   │   │   └── Loader.module.css
│   │   ├── ErrorScreen
│   │   │   ├── Error.module.css
│   │   │   └── ErrorScreen.jsx
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Loader
│   │   │   ├── Loader.css
│   │   │   └── Loader.jsx
│   │   ├── SearchCoin
│   │   │   ├── Search.module.css
│   │   │   └── SearchCoin.jsx
│   │   └── popups
│   │       ├── AddNewCoinPopup
│   │       │   ├── Add.module.css
│   │       │   └── AddNewCoinPopup.jsx
│   │       ├── AddNewWalletPopup
│   │       │   ├── Add.module.css
│   │       │   └── AddNewWalletPopup.jsx
│   │       └── TransactionPopup
│   │           ├── Trans.module.css
│   │           ├── TransactionPopup.jsx
│   │           ├── decorator.js
│   │           ├── init.js
│   │           └── operations
│   │               ├── BuyTransaction.jsx
│   │               ├── SellTransaction.jsx
│   │               ├── TransTransaction.jsx
│   │               └── index.js
│   └── pages
│       ├── Dashboard
│       │   ├── DashContainer.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Dashboard.module.css
│       │   ├── blocks
│       │   │   └── ShowCoinsBlock
│       │   │       ├── ShowCoinsBlock.jsx
│       │   │       └── ShowCoinsBlock.module.css
│       │   ├── modules
│       │   │   ├── LastNotifications.jsx
│       │   │   ├── ProfSettings.jsx
│       │   │   ├── SearchResultsDropDown.jsx
│       │   │   └── index.js
│       │   └── pages
│       │       ├── Buysell
│       │       │   ├── Buysell.jsx
│       │       │   └── Buysell.module.css
│       │       ├── CoinInfo
│       │       │   ├── Chart
│       │       │   │   ├── AreaChart
│       │       │   │   │   ├── AreaChart.jsx
│       │       │   │   │   └── constants.ts
│       │       │   │   ├── LineChart
│       │       │   │   │   ├── LineChart.jsx
│       │       │   │   │   └── constants.ts
│       │       │   │   ├── PrimChart.jsx
│       │       │   │   ├── SecChart.jsx
│       │       │   │   ├── TimeFilterButtons
│       │       │   │   │   └── index.tsx
│       │       │   │   └── theme.tsx
│       │       │   ├── ChartBlock.jsx
│       │       │   ├── Coin.module.css
│       │       │   ├── CoinInfo.jsx
│       │       │   └── Exchange.jsx
│       │       ├── FavPage.jsx
│       │       ├── MainPage.jsx
│       │       ├── Settings
│       │       │   ├── Settings.jsx
│       │       │   └── Settings.module.css
│       │       ├── TransactionsWallet
│       │       │   ├── TransactionsWallet.jsx
│       │       │   └── TransactionsWallet.module.css
│       │       ├── Wallets
│       │       │   ├── SelectWalletBlock.jsx
│       │       │   ├── Wallets.jsx
│       │       │   └── Wallets.module.css
│       │       └── index.js
│       ├── Login
│       │   ├── Login.jsx
│       │   ├── Login.module.css
│       │   └── LoginContainer.jsx
│       ├── MainScreen
│       │   ├── Features
│       │   │   ├── Features.jsx
│       │   │   └── Features.module.css
│       │   ├── HeaderTrends
│       │   │   ├── HeaderTrends.jsx
│       │   │   └── Trends.module.css
│       │   ├── MainScreen.jsx
│       │   └── MainScreen.module.css
│       └── Registration
│           ├── RegContainer.jsx
│           └── Registration.jsx
├── hoc
│   ├── DropDown
│   │   ├── DropDown.module.css
│   │   └── dropDownMenu.jsx
│   ├── withAuthRedirect.jsx
│   ├── withClickOutside.jsx
│   └── withRouter.jsx
├── hooks
│   ├── useFetching.js
│   ├── useOutsideClick.js
│   ├── useSession.js
│   └── useWindowDimensions
│       └── index.tsx
├── index.js
├── redux
│   ├── reducers
│   │   ├── app-reducer.js
│   │   ├── auth-reducer.js
│   │   ├── dashboard-reducer.js
│   │   ├── index.js
│   │   └── wallets-reducer.js
│   └── redux-store.js
├── routes
│   ├── routeTitle.js
│   └── routes.js
├── services
│   ├── ChangeTitle.jsx
│   ├── only3AfterDot.js
│   └── title.js
├── styles
│   ├── index.css
│   └── theme.tsx
└── utils
    └── ShowImage.jsx
```

44 directories, 96 files

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
