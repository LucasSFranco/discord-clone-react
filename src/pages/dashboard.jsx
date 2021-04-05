/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closePopup } from '@store/popup-slice';
import { closeModal } from '@store/modal-slice';
import { closePanel } from '@store/panel-slice';

import { Box } from '@components';

import {
  ChannelChat,
  ChannelHeader,
  ChannelList,
  ChatInput,
  CreateCategoryModal,
  CreateChannelModal,
  GuildHeader,
  GuildList,
  JoinOrCreateGuildModal,
  LogOutModal,
  MemberList,
  UserInfo,
  UserSettingsPanel,
} from './custom-components';

function Dashboard() {
  const dispatch = useDispatch();

  const dispatchClosePopup = () => {
    dispatch(closePopup());
  };

  useEffect(() => () => {
    dispatch(closePopup());
    dispatch(closeModal());
    dispatch(closePanel());
  }, [dispatch]);

  return (
    <Box
      attrs={{ d: 'flex', of: 'hidden', s: '100%' }}
      onClick={() => dispatchClosePopup()}
    >
      <GuildList />

      <Box attrs={{
        bg: '#2f3136', w: 240, d: 'flex', fld: 'column', fls: 0,
      }}
      >
        <GuildHeader />
        <ChannelList />
        <UserInfo />
      </Box>

      <Box attrs={{
        d: 'flex', fld: 'column', bg: '#36393f', flg: 1, of: 'hidden',
      }}
      >
        <ChannelHeader />
        <Box attrs={{ d: 'flex', h: '100%' }}>
          <Box attrs={{ d: 'flex', fld: 'column', flg: 1 }}>
            <ChannelChat />
            <ChatInput />
          </Box>
          <Box attrs={{
            w: 240, d: 'flex', fld: 'column', pos: 'relative',
          }}
          >
            <MemberList />
          </Box>
        </Box>
      </Box>

      <JoinOrCreateGuildModal />
      <CreateChannelModal />
      <CreateCategoryModal />

      <UserSettingsPanel />
      <LogOutModal />

    </Box>
  );
}

export default Dashboard;
