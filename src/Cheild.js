// import React from 'react';

// function Child(props) {
//   const newChange = () => {
//     props.changeHandle('Hello from Child');
//   };

//   return (
//     <div>
//       <button onClick={newChange}>Send Data to Parent</button>
//     </div>
//   );
// }

// export default Child;


import React from 'react';

function Child(props) {
  const newChange = () => {
    props.changeHandle('Hello from Child');
  };

  return (
    <div>
      <button onClick={newChange}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
