'use client';

import Loader from '@/components/Loader';
import { getClerkUsers, getDocumentUsers } from '@/lib/actions/user.actions';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';
import { ReactNode } from 'react';

const Provider = ({children} : {children: ReactNode}) => {
  return (
    <LiveblocksProvider  authEndpoint="/api/liveblocks-auth"
        resolveUsers={async ({ userIds }) => {
            const users = await getClerkUsers({ userIds});

            return users;
        }}
       /* resolveMentionSuggestions={async ({ text, roomId }) => {
            const roomUsers = await getDocumentUsers({
            roomId,
            currentUser: clerkUser?.emailAddresses[0].emailAddress!,
            text,
            })

            return roomUsers;
        }}*/
    >
      <ClientSideSuspense fallback={<div><Loader/></div>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
