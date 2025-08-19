export const cryptoCoinsQueryKeys = {
  cryptoCoins: () => ['cryptoCoins'],
  cryptoCoinsAll: () => [...cryptoCoinsQueryKeys.cryptoCoins(), 'all'],
};
