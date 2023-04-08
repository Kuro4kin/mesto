export default class Api {
  constructor(config) {
    this._config = config;
  }

  getInitialUserInfo() {
    return fetch(this._config.user, {
      method: 'GET',
      headers: {
        authorization: this._config.authorization
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных профиля ${err}`)
    })
  }

  getInitialCards() {
    return fetch(this._config.cards, {
      method: 'GET',
      headers: {
        authorization: this._config.authorization
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => {
      console.log(`Ошибка загрузки карточек ${err}`)
    })
  }

  editUserInfo(data) {
    return fetch(this._config.user, {
      method: 'PATCH',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject(res.status);
      }
    })
  }

  editUserAvatar(data) {
    return fetch(`${this._config.user}/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        avatar: data.avatar
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject(res.status);
      }
    })
  }

  createNewCard(data) {
    return fetch(this._config.cards, {
      method: 'POST',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject(res.status)
      }
    })
  }

  likeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject(res.status)
      }
    })
  }

  unlikeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject(res.status)
      }
    })
  }

  removeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject(res.status)
      }
    })
  }
}