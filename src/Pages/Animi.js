import { TypeAnimation } from 'react-type-animation';

function Animi () {
  return (
    <TypeAnimation
    sequence={[
      'One',
      500,
      'One Two', //  Continuing previous Text
      500,
      'One Two Three',
      500,
      'One Two',
      500,
      'One',
      500,
      '',
      500,
    ]}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />
  );
};

export default Animi