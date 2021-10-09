import { Button, Heading, Input, Text } from '@components/ui';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './inputButton.module.css';
import cn from 'classnames';
import useSWR from 'swr';
import fetcher from 'src/utils/fetcher';
import debounce from 'lodash.debounce';

const InputButton = (props: any) => {
  const {
    color = 'primary',
    buttonTitle,
    size = 'medium',
    radius = 'rounded',
    ...rest
  } = props;

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [query, setQuery] = useState('');
  const { data, error } = useSWR(`/api/books/${query}`, fetcher);

  const isInputFocus = () => {
    if (!query) {
      setIsSearchVisible(false);
      return;
    }
    setIsSearchVisible(true);
  };

  const searchInputChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setIsSearchVisible(false);
    } else {
      setIsSearchVisible(true);
    }
    setQuery(value);
  };

  const isInputBlur = () => {
    setIsSearchVisible(false);
  };

  const SearchItem = (props) => {
    const { img, name, description } = props;

    console.log(data);
    return (
      <li className={styles.listItem}>
        <div className={styles.avatar}>
          <img src={img.src} />
        </div>
        <div className={styles.listItemTextContent}>
          <Heading as="h2" size="xs">
            {name}
          </Heading>
          <p>{description}</p>
        </div>
      </li>
    );
  };

  return (
    <div className={styles.inputContainer}>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            onFocus={isInputFocus}
            onBlur={isInputBlur}
            role="search"
            onChange={searchInputChange}
            value={query}
            {...rest}
            style={{ border: 0 }}
            autoComplete="off"
          />
        </div>
        <Button type="submit" color={color} radius={radius} size={size}>
          {buttonTitle}
        </Button>
      </form>

      <ul
        className={cn(styles.search, {
          [styles.visible]: isSearchVisible === true,
          [styles.invisible]: isSearchVisible === false
        })}
      >
        {data?.books.map(({ id, ...rest }) => {
          return <SearchItem key={id} {...rest} />;
        })}
      </ul>
    </div>
  );
};

export default InputButton;
