import React from 'react';

const MyMsg = function (props) {
  return (
    <p>hi， my message！ </p>
  )
}

const Components = {
  Msg: MyMsg,
  Dialog: function(props) {
    return (
      <div>
        这是dialog！
      </div>
    )
  } 
};

export default function Demo(props) {
  let { cname } = props;
  let Comp = Components[cname];
  const ps = {
    id: 'aicoder',
    name: 'front',
    tk: 'laoma'
  };
  return (
    <div>
      hi, fun demo
      <hr/>
      <Components.Msg></Components.Msg>
      <Components.Dialog></Components.Dialog>
      <Comp checked />
      <Comp checked="true" />
      <Comp checked={ true } />
      {/* <p onClick={ console.log(2) }></p> */}
      <p {...ps}>22222</p>
      <hr/>
    </div>
  );
}
