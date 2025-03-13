import { List } from '@mui/material';
import { useMemo } from 'react';
import { COIN_LIST } from '../constants';
import { Coin, Coins } from '../types';
import VisibleCoinsListItem from './VisibleCoinsListItem';

interface Props {
  query?: string;
  network?: string;
  onSelect: (coin: Coin) => void;
  selectedCoins: Coins;
}

export default function VisibleCoinsList({
  query,
  network,
  selectedCoins,
  onSelect,
}: Props) {
  const filteredCoins = useMemo(() => {
    let coins = COIN_LIST;

    if (network) {
      coins = coins.filter((c) => c.network.id === network);
    }

    if (query) {
      coins = coins.filter(
        (c) =>
          c.name.toLowerCase().search(query.toLowerCase()) > -1 ||
          c.network.name.toLowerCase().search(query.toLowerCase()) > -1
      );
    }

    return coins;
  }, [query, network]);

  return (
    <List disablePadding>
      {filteredCoins.map((coin, index, arr) => (
        <VisibleCoinsListItem
          key={index}
          coin={coin}
          divider={index < arr.length - 1}
          selectedCoins={selectedCoins}
          onSelect={onSelect}
        />
      ))}
    </List>
  );
}
