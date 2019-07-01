import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Toast extends Component {
  notifyA = () => toast('Wow so easy !', {containerId: 'A'});
  notifyB = () => toast('Wow so easy !', {containerId: 'B'});

  render(){
    return (
      <div>
          <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
          <button onClick={this.notifyB}>Add to Cart</button>          
      </div>
    );
  }
}

export default Toast;