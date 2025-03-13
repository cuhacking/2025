import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'

const DATA = {
  docs: [
    {
      id: 8,
      title: 'Best general hack',
      pathTitle: 'E:general@cuhacking.exe',
      symbol: {
        id: 178,
        alt: 'Gadget Logo',
        updatedAt: '2025-03-13T12:16:31.707Z',
        createdAt: '2025-03-13T12:16:31.661Z',
        url: 'http://localhost:8000/api/media/file/gadget-logo-symbol-1.gadget-logo-symbol',
        thumbnailURL: null,
        filename: 'gadget-logo-symbol-1.gadget-logo-symbol',
        mimeType: 'image/svg+xml',
        filesize: 10383,
        width: 230,
        height: 60,
        focalX: null,
        focalY: null,
      },
      challengeBlock: [
        {
          id: '67d3077e8dd54b3d043d462b',
          title: 'getDetails()',
          blockName: null,
          bullets: [
            {
              id: '67d307828dd54b3d043d462d',
              point: 'something here',
            },
          ],
          blockType: 'info',
        },
        {
          id: '67d3078f8dd54b3d043d462f',
          title: 'getResources()',
          blockName: null,
          buttons: [
            {
              id: '67d307938dd54b3d043d4631',
              title: 'registser',
              link: 'links',
            },
          ],
          blockType: 'resources',
        },
      ],
      updatedAt: '2025-03-13T16:28:14.400Z',
      createdAt: '2025-03-13T12:16:32.605Z',
    },
    {
      id: 7,
      title: 'Most Impact',
      pathTitle: 'E:impact-carleton@cuhacking.exe',
      symbol: {
        id: 178,
        alt: 'Gadget Logo',
        updatedAt: '2025-03-13T12:16:31.707Z',
        createdAt: '2025-03-13T12:16:31.661Z',
        url: 'http://localhost:8000/api/media/file/gadget-logo-symbol-1.gadget-logo-symbol',
        thumbnailURL: null,
        filename: 'gadget-logo-symbol-1.gadget-logo-symbol',
        mimeType: 'image/svg+xml',
        filesize: 10383,
        width: 230,
        height: 60,
        focalX: null,
        focalY: null,
      },
      updatedAt: '2025-03-13T12:16:32.606Z',
      createdAt: '2025-03-13T12:16:32.603Z',
      challengeBlock: [],
    },
    {
      id: 6,
      title: 'Best use of Gadget',
      pathTitle: 'E:gadget@cuhacking.exe',
      symbol: {
        id: 178,
        alt: 'Gadget Logo',
        updatedAt: '2025-03-13T12:16:31.707Z',
        createdAt: '2025-03-13T12:16:31.661Z',
        url: 'http://localhost:8000/api/media/file/gadget-logo-symbol-1.gadget-logo-symbol',
        thumbnailURL: null,
        filename: 'gadget-logo-symbol-1.gadget-logo-symbol',
        mimeType: 'image/svg+xml',
        filesize: 10383,
        width: 230,
        height: 60,
        focalX: null,
        focalY: null,
      },
      updatedAt: '2025-03-13T12:16:32.604Z',
      createdAt: '2025-03-13T12:16:32.603Z',
      challengeBlock: [],
    },
    {
      id: 5,
      title: 'Best use of QNX (Software)',
      pathTitle: 'E:qnx@cuhacking.exe',
      symbol: {
        id: 171,
        alt: 'QNX Logo',
        updatedAt: '2025-03-13T12:16:31.685Z',
        createdAt: '2025-03-13T12:16:31.653Z',
        url: 'http://localhost:8000/api/media/file/qnx-logo-symbol-1.qnx-logo-symbol',
        thumbnailURL: null,
        filename: 'qnx-logo-symbol-1.qnx-logo-symbol',
        mimeType: 'image/svg+xml',
        filesize: 834,
        width: 173,
        height: 60,
        focalX: null,
        focalY: null,
      },
      updatedAt: '2025-03-13T12:16:32.603Z',
      createdAt: '2025-03-13T12:16:32.602Z',
      challengeBlock: [],
    },
  ],
  hasNextPage: false,
  hasPrevPage: false,
  limit: 10,
  nextPage: null,
  page: 1,
  pagingCounter: 1,
  prevPage: null,
  totalDocs: 4,
  totalPages: 1,
}

export function ChallengesPage() {
  return (
    <section className="max-w-screen-xl mx-auto grid sm:grid-cols-2 gap-2">
      {DATA.docs.map(doc => (
        <GlassmorphicCard key={doc.id} pathTitle={doc.pathTitle} minimize>
          <div className="flex p-4">
            {doc.challengeBlock.map(block =>
              block.blockType === 'info'
                ? (
                    <ChallangeBlockBullet key={block.id} />
                  )
                : (
                    <ChallangeBlockButtons key={block.id} />
                  ),
            )}
            <div>{doc.id}</div>
          </div>
        </GlassmorphicCard>
      ))}
    </section>
  )
}

function ChallangeBlockBullet() {
  return (
    <div>---ChallangeBlockBullet</div>
  )
}

function ChallangeBlockButtons() {
  return (
    <div>ChallangeBlockBUTTON</div>
  )
}
