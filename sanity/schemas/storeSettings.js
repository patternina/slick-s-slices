import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings', // Computer name
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the store',
    },
    {
      name: 'slicemaster',
      title: 'Slicemasters Currently Slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Hot Slices Available in the Case',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
