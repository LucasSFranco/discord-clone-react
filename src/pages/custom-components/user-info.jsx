/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@store/user-slice';
import { openPanel } from '@store/panel-slice';

import {
  Avatar,
  Box,
  IconButton,
  Strong,
  Subtext,
  Tooltip,
} from '@components';

import { Cog } from '@assets';
import { Self } from './styles/user-info';

function UserInfo() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const dispatchOpenPanel = (e, id) => {
    e.stopPropagation();
    dispatch(openPanel(id));
  };

  return (
    <Box attrs={{
      h: 52,
      px: 8,
      d: 'flex',
      ai: 'center',
      bg: '#292b2f',
      fls: 0,
    }}
    >
      <Avatar attrs={{ mr: 8 }} src={user?.avatar} />
      <Box attrs={{
        d: 'flex', fld: 'column', flg: 1, of: 'hidden',
      }}
      >
        <Strong nowrap attrs={{ fs: 14, lh: 18 }}>
          {' '}
          {user?.username}
          {' '}
        </Strong>
        <Subtext attrs={{ c: '#b9bbbe', fs: 12, lh: 13 }}>
          {' '}
          #
          {user?.tag}
          {' '}
        </Subtext>
      </Box>
      <IconButton
        backgrounded
        attrs={{ s: 32 }}
        onClick={(e) => dispatchOpenPanel(e, 'user-settings-panel')}
      >
        <Cog attrs={{ s: 20 }} />
        <Tooltip direction="top" spacing={8}> User Settings </Tooltip>
      </IconButton>
    </Box>
  );
}

export default UserInfo;
