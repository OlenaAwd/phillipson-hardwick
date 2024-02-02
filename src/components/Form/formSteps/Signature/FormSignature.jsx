import React, { useEffect, useRef } from 'react';
import Signature from 'signature_pad';
import AppStore from '../../../../store/AppStore';
import styles from './FormSignature.module.scss';

const FormSignature = ({ isSignature }) => {
  const [signaturePad, setSignaturePad] = React.useState(false);

  const defaultSignature = '';
  const readyPad = () => {
    let wrapper = document.getElementById('signature-pad');
    let canvas = wrapper?.querySelector('canvas');
    canvas.getContext('2d').scale(1, 1);
    let signaturePad = new Signature(canvas, {
      backgroundColor: 'transparent',
    });
    setSignaturePad(signaturePad);
    let data = AppStore.signatureImg;
    if (data !== '') {
      signaturePad.fromDataURL(data);
    }
  };

  const myRef = useRef(null);

  const getImg = () => {
    const img = myRef.current.toDataURL();

    if (defaultSignature === img) {
      isSignature(false);
      return;
    }
    AppStore.updateSignatureImg(img);
    isSignature(true);
  };

  useEffect(() => {
    readyPad();
  }, []);

  return (
    <div className={styles.wrapper} id="signature-pad">
      <canvas
        className={styles.signature}
        width="250"
        height="250"
        ref={myRef}
        onClick={() => getImg()}
        onTouchEnd={() => getImg()}
      ></canvas>
      <div>
        <button
          className={styles.btnClear}
          onClick={() => {
            AppStore.updateSignatureImg(defaultSignature);
            signaturePad.clear();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
export default FormSignature;
