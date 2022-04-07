export function changeTitle(newTitle) {
  if (newTitle) {
    document.title = newTitle;
  } else {
    document.title = "CoinChecker";
  }
}