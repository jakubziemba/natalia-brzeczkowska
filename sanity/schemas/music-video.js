export default {
  name: 'music-video',
  type: 'document',
  title: 'Music Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Artist name & title',
    },
    {
      name: 'artist',
      type: 'string',
      title: 'Artist name',
    },
    {
      name: 'videoTitle',
      type: 'string',
      title: 'Music video title',
    },
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
    {
      name: 'videoPlaceholder',
      type: 'image',
      title: 'Video placeholder',
    },
  ],
};
