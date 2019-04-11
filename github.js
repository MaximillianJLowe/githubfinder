class Github {
  constructor() {
    this.client_id = 'e6b340dc44d386db9465';
    this.client_secret = 'cff22d6c02c293ffe2fb06a2cac62e1cfd8ef80f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
