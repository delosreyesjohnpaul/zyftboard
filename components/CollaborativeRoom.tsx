"use client"

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React, { useRef, useState } from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import ActiveCollaborators from './ActiveCollaborators'



const CollaborativeRoom = ({roomId, roomMetadata} : CollaborativeRoomProps) => {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
            <Header>
                <div ref={containerRef} className='flex w-fit items-center justify-center gap-y-2'>
                  {}
                </div>
                <div  className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                    <ActiveCollaborators/>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                
            </Header>
            <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom