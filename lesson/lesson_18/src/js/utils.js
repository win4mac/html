export const getFullUrl = newRoute => {
  const currentUrl = window.location.href;
  const urlArray = currentUrl.split('/');
  urlArray.pop();
  const permanentUrl = urlArray.join('/');
  console.log(permanentUrl);
  return permanentUrl + newRoute;
};
