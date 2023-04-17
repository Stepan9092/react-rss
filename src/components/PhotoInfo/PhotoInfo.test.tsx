import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import PhotoInfo from './PhotoInfo';

const data = {
  id: '52801986998',
  secret: 'f5475cf371',
  server: '65535',
  farm: 66,
  dateuploaded: '1680947114',
  isfavorite: 0,
  license: 0,
  safety_level: 0,
  rotation: 0,
  originalsecret: 'ce154a3aa5',
  originalformat: 'jpg',
  owner: {
    nsid: '190725509@N08',
    username: 'jdezkrlv53',
    realname: 'Karen WOOD',
    location: '',
    iconserver: 0,
    iconfarm: 0,
    path_alias: '',
    gift: { gift_eligible: '1', eligible_durations: ['year', 'month', 'week'], new_flow: '1' },
  },
  title: { _content: 'Cheetahs of Longleatsafaripark' },
  description: { _content: '' },
  visibility: { ispublic: 1, isfriend: 0, isfamily: 0 },
  dates: {
    posted: '1680947114',
    taken: '2023-04-05 09:36:07',
    takengranularity: 0,
    takenunknown: 0,
    lastupdate: '1680947114',
  },
  views: 2,
  editability: { cancomment: 1, canaddmeta: 0 },
  publiceditability: { cancomment: 1, canaddmeta: 0 },
  usage: { candownload: 1, canblog: 1, canprint: 0, canshare: 1 },
  comments: { _content: 0 },
  notes: {
    note: [],
  },
  people: { haspeople: 0 },
  tags: {
    tag: [
      {
        id: '190632696-52801986998-39153',
        author: '190725509@N08',
        authorname: 'jdezkrlv53',
        raw: '#longleat',
        _content: 'longleat',
        machine_tag: 0,
      },
      {
        id: '190632696-52801986998-81312',
        author: '190725509@N08',
        authorname: 'jdezkrlv53',
        raw: '#cheetahs',
        _content: 'cheetahs',
        machine_tag: 0,
      },
    ],
  },
  urls: {
    url: [
      { type: 'photopage', _content: 'https://www.flickr.com/photos/190725509@N08/52801986998/' },
    ],
  },
  media: 'photo',
};

describe('Photo Info', () => {
  it('item has image', () => {
    render(<PhotoInfo data={data} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Owner:')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
  });
});
