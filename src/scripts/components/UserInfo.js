export default class UserInfo {
  constructor( {nameProfileSelector, jobProfileSelector}) {
    this._nameProfile = document.querySelector(nameProfileSelector);
    this._jobProfile = document.querySelector(jobProfileSelector);
  }


  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameProfile.textContent;
    userInfo.job = this._jobProfile.textContent;
    return userInfo
  }

  setUserInfo(formValues) {
    this._nameProfile.textContent = formValues.name;
    this._jobProfile.textContent = formValues.job;
  }
}