# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to the project: http://coincheckerproj.herokuapp.com/

## Project structure

.
├── App.js<br>
├── api<br>
│   ├── AuthService.js<br>
│   ├── BoardService.js<br>
│   └── WalletService.js<br>
├── components<br>
│   ├── UI<br>
│   │   ├── Aside<br>
│   │   │   ├── Aside.jsx<br>
│   │   │   └── Aside.module.css<br>
│   │   ├── EmbeddedLoader<br>
│   │   │   ├── EmbeddedLoader.jsx<br>
│   │   │   └── Loader.module.css<br>
│   │   ├── ErrorScreen<br>
│   │   │   ├── Error.module.css<br>
│   │   │   └── ErrorScreen.jsx<br>
│   │   ├── Header<br>
│   │   │   ├── Header.jsx<br>
│   │   │   └── Header.module.css<br>
│   │   ├── Loader<br>
│   │   │   ├── Loader.jsx<br>
│   │   │   └── Loader.module.css<br>
│   │   └── SearchCoin<br>
│   │       ├── Search.module.css<br>
│   │       └── SearchCoin.jsx<br>
│   └── pages<br>
│       ├── Dashboard<br>
│       │   ├── DashContainer.jsx<br>
│       │   ├── Dashboard.jsx<br>
│       │   ├── Dashboard.module.css<br>
│       │   ├── blocks<br>
│       │   │   └── ShowCoinsBlock<br>
│       │   │       ├── ShowCoinsBlock.jsx<br>
│       │   │       ├── ShowCoinsBlock.module.css<br>
│       │   │       └── TransactionPopup<br>
│       │   │           ├── Trans.module.css<br>
│       │   │           └── TransactionPopup.jsx<br>
│       │   ├── modules<br>
│       │   │   ├── LastNotifications.jsx<br>
│       │   │   ├── ProfSettings.jsx<br>
│       │   │   ├── SearchResultsDropDown.jsx<br>
│       │   │   └── index.js<br>
│       │   └── pages<br>
│       │       ├── Buysell<br>
│       │       │   ├── Buysell.jsx<br>
│       │       │   └── Buysell.module.css<br>
│       │       ├── CoinInfo<br>
│       │       │   ├── Coin.module.css<br>
│       │       │   └── CoinInfo.jsx<br>
│       │       ├── FavPage.jsx<br>
│       │       ├── MainPage.jsx<br>
│       │       ├── Settings<br>
│       │       │   ├── Settings.jsx<br>
│       │       │   └── Settings.module.css<br>
│       │       ├── TransactionsWallet<br>
│       │       │   ├── TransactionsWallet.jsx<br>
│       │       │   └── TransactionsWallet.module.css<br>
│       │       ├── Wallets<br>
│       │       │   ├── AddNewCoinPopup<br>
│       │       │   │   ├── Add.module.css<br>
│       │       │   │   └── AddNewCoinPopup.jsx<br>
│       │       │   ├── AddNewWalletPopup\ copy<br>
│       │       │   │   ├── Add.module.css<br>
│       │       │   │   └── AddNewWalletPopup.jsx<br>
│       │       │   ├── SelectWalletBlock.jsx<br>
│       │       │   ├── Wallets.jsx<br>
│       │       │   └── Wallets.module.css<br>
│       │       └── index.js<br>
│       ├── Login<br>
│       │   ├── Login.jsx<br>
│       │   ├── Login.module.css<br>
│       │   └── LoginContainer.jsx<br>
│       ├── MainScreen<br>
│       │   ├── Features<br>
│       │   │   ├── Features.jsx<br>
│       │   │   └── Features.module.css<br>
│       │   ├── HeaderTrends<br>
│       │   │   ├── HeaderTrends.jsx<br>
│       │   │   └── Trends.module.css<br>
│       │   ├── MainScreen.jsx<br>
│       │   └── MainScreen.module.css<br>
│       └── Registration<br>
│           ├── RegContainer.jsx<br>
│           └── Registration.jsx<br>
├── hoc<br>
│   ├── DropDown<br>
│   │   ├── DropDown.module.css<br>
│   │   └── dropDownMenu.jsx<br>
│   ├── withAuthRedirect.jsx<br>
│   ├── withClickOutside.jsx<br>
│   └── withRouter.jsx<br>
├── hooks<br>
│   ├── useFetching.js<br>
│   ├── useOutsideClick.js<br>
│   └── useSession.js<br>
├── index.js<br>
├── redux<br>
│   ├── actions<br>
│   ├── reducers<br>
│   │   ├── app-reducer.js<br>
│   │   ├── auth-reducer.js<br>
│   │   ├── dashboard-reducer.js<br>
│   │   ├── index.js<br>
│   │   └── wallets-reducer.js<br>
│   ├── redux-store.js<br>
│   └── sagas<br>
├── routes<br>
│   ├── routeTitle.js<br>
│   └── routes.js<br>
├── services<br>
│   ├── ChangeTitle.jsx<br>
│   └── title.js<br>
├── styles<br>
│   └── index.css<br>
└── utils<br>
    └── ShowImage.jsx<br>

39 directories, 77 files

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
