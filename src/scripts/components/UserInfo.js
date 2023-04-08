export default class UserInfo {
  constructor( {
    nameProfileSelector, 
    aboutProfileSelector, 
    avatarProfileSelector} ) {
    this._nameProfile = document.querySelector(nameProfileSelector);
    this._aboutProfile = document.querySelector(aboutProfileSelector);
    this._avatarProfile = document.querySelector(avatarProfileSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameProfile.textContent;
    userInfo.about = this._aboutProfile.textContent;
    userInfo.avatar = this._avatarProfile.src;
    return userInfo
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._aboutProfile.textContent = data.about;
    this._avatarProfile.src = data.avatar;
  }
}