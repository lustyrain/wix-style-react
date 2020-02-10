export const image = `
<Avatar
  imgProps={{ src: 'https://randomuser.me/api/portraits/women/39.jpg' }}
/>;
`;

export const imageError = `
<Avatar
  imgProps={{src: 'https://1234.me/4321.jpg'}}
/>;
`;

export const imageErrorInitials = `
<Avatar
  name="John Doe"
  imgProps={{src: 'https://1234.me/4321.jpg'}}/>
`;

export const sizes = `
<Box align="space-between" width="500">
  <Avatar size="size90" name={'John Doe'} />
  <Avatar size="size72" name={'John Doe'} />
  <Avatar size="size60" name={'John Doe'} />
  <Avatar size="size48" name={'John Doe'} />
  <Avatar size="size36" name={'John Doe'} />
  <Avatar size="size30" name={'John Doe'} />
  <Avatar size="size24" name={'John Doe'} />
  <Avatar size="size18" name={'John Doe'} />
</Box>
`;

export const squareShape = `
<Box align="space-between" width="500">
  <Avatar shape="square" presence={'online'} size="size90" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size72" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size60" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size48" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size36" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size30" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size24" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size18" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
</Box>
`;

export const colors = `
<Box align="space-between" width="300">
  <Avatar color="A1" name={'John Doe'} />
  <Avatar color="A2" name={'John Doe'} />
  <Avatar color="A3" name={'John Doe'} />
  <Avatar color="A4" name={'John Doe'} />
  <Avatar color="A5" name={'John Doe'} />
  <Avatar color="A6" name={'John Doe'} />
</Box>
`;

export const placeholder = `
<Layout justifyItems='center'>
  <Cell span={6}>
    <Avatar />
  </Cell>
  <Cell span={6}>
    <Avatar shape='square' />
  </Cell>
</Layout>
`;

export const customText = `
<Avatar name="John H. Doe" text="JhD"/>
`;

export const presence = `
<Box align="space-between" width="180">
            <Avatar presence={'online'} name={'John Doe'} />
            <Avatar presence={'offline'} name={'John Doe'} />
            <Avatar presence={'busy'} name={'John Doe'} />
          </Box>
`;

export const indication = `
<Box align="space-between" width="350">
  <Avatar indication={<Icons.PhotoCamera size="24"/>}
          name={'John Doe'} size="size90" />
  <Avatar indication={<Icons.PhotoCamera size="24"/>}
          name={'John Doe'} size="size72" />
  <Avatar indication={<Icons.PhotoCamera size="24"/>}
          name={'John Doe'} size="size60" />
  <Avatar indication={<Icons.PhotoCamera size="24"/>}
          name={'John Doe'} />
</Box>
`;

export const click = `
<Avatar name="John H. Doe" onClick={() => console.log('Avatar click!')} />
`;
