# CoinChecker - Crypto Tracker PWA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to the project: http://gerwld.github.io/coinchecker <br>
Heroku: http://coincheckerproj.herokuapp.com/

<img width="960" alt="cc_3 copy2" src="https://user-images.githubusercontent.com/47056812/166335347-6866ccbb-4153-487f-aca3-b1e6aad50144.png">


<details>
  <summary><h3>Screenshots: <b>(Click to expand)</b></h3></summary>
    
![dashboard_2_1920](https://user-images.githubusercontent.com/47056812/166341405-f991a90a-312c-4ee5-bf16-db4054a5bd12.png)
![1](https://user-images.githubusercontent.com/47056812/166341145-1c908df4-8586-4376-a0ac-6943ed51006c.png)
![3](https://user-images.githubusercontent.com/47056812/166341150-46593089-70b3-4818-b3cc-7b0034b4b945.png)
![4](https://user-images.githubusercontent.com/47056812/166342096-b891ba18-2339-45b9-8f67-6d243f8d6aa9.png)
![mobile](https://user-images.githubusercontent.com/47056812/166340610-0658879b-67a3-473a-8a27-05b4edf5b1b2.png)
    
</details>



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
│   │   ├── Breadcrumbs
│   │   │   ├── Br.module.css
│   │   │   └── Breadcrumbs.jsx
│   │   ├── CoinTitle
│   │   │   ├── Cointitle.jsx
│   │   │   └── Ct.module.css
│   │   ├── EmbeddedLoader
│   │   │   ├── EmbeddedLoader.jsx
│   │   │   └── EmbeddedLoader.module.css
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
│   │               ├── SwapTransaction.jsx
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

46 directories, 100 files

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
